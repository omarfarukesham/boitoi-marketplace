import { Link } from 'react-router-dom';
import { FiCheckCircle, FiShoppingBag } from 'react-icons/fi';

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <FiCheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Payment Successful!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <FiCheckCircle className="h-5 w-5 text-green-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  Your payment has been processed successfully.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <Link
              to="/products"
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FiShoppingBag className="mr-2" />
              Continue Shopping
            </Link>
            
            <Link
              to="/profile"
              className="text-blue-600 hover:text-blue-500 text-sm font-medium"
            >
              View Order History
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
