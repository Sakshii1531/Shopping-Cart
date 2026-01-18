import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-2 py-8 bg-[#f7f8fa]">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full max-w-5xl">
          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between h-fit">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
              <h3 className="text-lg font-semibold mb-3 text-gray-600">Summary</h3>
              <p className="mb-6">
                <span className="text-gray-600 font-medium">
                  Total items: {cart.length}
                </span>
              </p>
            </div>
            <div className="border-t pt-6">
              <p className="text-lg font-bold text-green-600 mb-4">
                Total Amount: ${totalAmount.toFixed(2)}
              </p>
              <button className="w-full bg-green-500 text-white text-lg px-4 py-2 rounded hover:bg-green-600 transition-colors font-semibold">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-6 bg-white shadow-md rounded-xl p-10">
          <h1 className="text-2xl font-bold text-gray-700">Cart is Empty</h1>
          <Link to={"/"}>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
