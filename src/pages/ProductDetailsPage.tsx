/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "@/feature/products/productSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "@/feature/cart/cartSlice";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import LoadingSkeleton from "@/components/LoadingSkeleton";
// import { IProductResponse } from "@/types/product.type";
// import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { data: response, isLoading, error } = useGetProductQuery(id || "")
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  // console.log(product.data.author)

  const product = (response as any)?.data;

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error Loading Product</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity,
        inStock: true
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:flex-shrink-0 md:w-1/2">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-8 md:w-1/2">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                {product.category}
              </div>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                {product.title}
              </h1>
              <p className="mt-4 text-gray-600">{product.description}</p>

              <div className="mt-6">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    ৳{product.price}
                  </span>
                  {product?.inStock ? (
                    <span className="ml-4 text-sm font-medium text-green-600">
                      In Stock
                    </span>
                  ) : (
                    <span className="ml-4 text-sm font-medium text-red-600">
                      Out of Stock
                    </span>
                  )}
                </div>

                <div className="mt-6">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 border rounded-md hover:bg-gray-50"
                    >
                      <FiMinus />
                    </button>
                    <span className="text-lg font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 border rounded-md hover:bg-gray-50"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`mt-8 w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md text-base font-medium text-white 
                    ${
                      product.inStock
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>

              {/* Additional Details */}
              <div className="mt-8 border-t pt-8">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Author:</span> {product.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Genre:</span> {product.description}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Publication Date:</span>{" "}
                    {new Date(product.publicationDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
