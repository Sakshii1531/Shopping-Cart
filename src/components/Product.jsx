import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col w-[250px] m-4 transition-transform hover:scale-105 hover:shadow-xl">
      <div className="p-5 flex-1 flex flex-col items-center justify-between">
        <div className="w-full">
          <p className="text-lg font-semibold mb-2 text-gray-800">{post.title}</p>
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">{post.description}</p>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="h-[100px] object-contain mb-3"
        />

        <p className="text-green-600 font-bold text-base mb-2">${post.price}</p>
      </div>
      {/* Button at bottom, with margin and side padding */}
      <div className="px-5 pb-5">
        {cart.some((p) => p.id === post.id) ? (
          <button
            onClick={removeFromCart}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
