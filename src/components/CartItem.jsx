import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-5 gap-6 mb-4 top-10">
      {/* Left: Image */}
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="h-28 w-28 object-contain rounded-md"
        />
      </div>

      {/* Right: Details */}
      <div className="flex flex-col flex-grow gap-2">
        <h1 className="text-lg font-bold text-gray-800">{item.title}</h1>
        <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-green-600 font-semibold text-base">
            ${item.price}
          </p>
          <button
            onClick={removeFromCart}
            className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors"
            title="Remove from Cart"
          >
            <MdDelete size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
