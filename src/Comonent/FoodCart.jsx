
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add } from "../Redux/Slices/CartSlice";



const FoodCart = ({ id, name, price, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
        <img
          src={img}
          alt=""
          className="w-auto h-[130] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        />

        <div className="text-sm flex justify-between">
          <h2>{name}</h2>
          <span className="text-green-500"> &#8377; {price}</span>
        </div>

        <p className="text-sm font-normal">{desc.slice(0, 50)}....</p>

        <div className="flex justify-between">
          <span className="flex justify-center items-center">
            <FaStar className="mr-1 text-yellow-400" /> {rating}
          </span>
          <button onClick={()=>{
            dispatch(add({id,name,price,rating,img,qty:1}))
            handleToast(name)
          }}
           className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

FoodCart.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  handleToast:PropTypes.string.isRequired,
};

export default FoodCart;
