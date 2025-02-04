import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotalAmount } from '@/feature/cart/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  
  if (cartItems.length === 0) {
    navigate('/cart'); // Redirect if no items
  }


  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Checkout</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between p-2 border-b">
              <span>{item.title} x {item.quantity}</span>
              <span>৳{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between font-semibold border-t pt-2 mt-2">
            <span>Total</span>
            <span>৳{totalAmount + 50}</span>
          </div>

          <button
            onClick={handleProceedToPayment}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700"
          >
            Proceed to Payment
          </button>

          <Link
            to="/cart"
            className="block text-center text-blue-600 hover:text-blue-800 mt-4"
          >
            Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}





// import React, { useState, useEffect } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// interface CartItem {
//   id: string;
//   quantity: number;
// }

// interface CheckoutFormProps {
//   userId: string;
//   cartItems: CartItem[];
//   totalAmount: number;
// }

// const CheckoutForm: React.FC<CheckoutFormProps> = ({ userId, cartItems, totalAmount }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<boolean>(false);

//   useEffect(() => {
//     fetch("https://assignment-3-gray-seven.vercel.app/api/checkout/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount: totalAmount * 100, currency: "usd" }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret))
//       .catch((err) => console.error("Error fetching clientSecret:", err));
//   }, [totalAmount]);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setError(null);

//     if (!stripe || !elements) return;

//     const cardElement = elements.getElement(CardElement);
//     if (!cardElement) {
//       setError("Card details are required.");
//       return;
//     }

//     const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: cardElement,
//       },
//     });

//     if (error) {
//       setError(error.message || "Payment failed");
//     } else if (paymentIntent?.status === "succeeded") {
//       setSuccess(true);

//       fetch("https://assignment-3-gray-seven.vercel.app/api/order/create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           userId,
//           items: cartItems.map((item) => ({
//             productId: item.id,
//             quantity: item.quantity,
//           })),
//           totalAmount,
//           paymentStatus: "paid",
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => console.log("Order Saved:", data))
//         .catch((err) => console.error("Error saving order:", err));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay Now
//       </button>
//       {error && <div style={{ color: "red" }}>{error}</div>}
//       {success && <div style={{ color: "green" }}>Payment Successful!</div>}
//     </form>
//   );
// };

// export default CheckoutForm;