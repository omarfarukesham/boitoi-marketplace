import { useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { selectCartItems, selectCartTotalAmount } from "@/feature/cart/cartSlice";
import { useDispatch } from 'react-redux';
import { clearCart } from '@/feature/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
const stripePromise = loadStripe("pk_test_51L17S3Aulic6qQrOWGrbv6XevLHQxjWVo0r53sg6FZULDRq3dEvVlvx6rrXVJG4gDYYKs5ygvXNO1WXApC7dl9x300xr6raBfa");

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);

  const fetchPaymentIntent = async () => {
    try {
      const response = await fetch("https://assignment-3-gray-seven.vercel.app/api/orders/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          cartItems,
          totalPrice: totalAmount + 50,
          currency: "usd",
          paymentMethodType: ["card"],
        }),
      });

      const data = await response.json();
      if (data.success && data.data.paymentIntent.client_secret) {
        setClientSecret(data.data.paymentIntent.client_secret);
      } else {
        throw new Error("Failed to retrieve client secret");
      }
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg text-center w-96">
        <h2 className="text-2xl font-semibold mb-4">Total Payment: ৳{totalAmount + 50}</h2>

        <button
          onClick={fetchPaymentIntent}
          className="w-full bg-green-600 text-white py-3 rounded-md mt-4 hover:bg-green-700 transition"
        >
          Proceed to Payment
        </button>

        {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        )}
      </div>
    </div>
  );
}

function CheckoutForm({ clientSecret }) {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else if (paymentIntent.status === "succeeded") {
      dispatch(clearCart()); // Clear cart after successful payment
      Navigate("/payment-success");
    }
  };


  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="border rounded-lg p-3 bg-gray-50">
        <CardElement
          options={{
            style: {
              base: { fontSize: "16px", color: "#333", "::placeholder": { color: "#888" } },
              invalid: { color: "#ff4d4f" },
            },
          }}
        />
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full py-3 rounded-md text-white transition ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>

      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
}
