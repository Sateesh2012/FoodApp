import PropTypes from 'prop-types'; 
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'; 
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, remove } from '../Redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const ItemCart = ({ id, name, price, img, qty }) => { 

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity({ id })); // corrected to use id directly
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ id })); // corrected to use id directly
  };


  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete onClick={()=>{dispatch(remove({id,img,name,price ,qty}));
      toast(`${name} Removed`, {
        icon: '👏',
      });
      
    }}
       className="absolute right-7 text-gray-600 cursor-pointer" /> 
      <img
        src={img}
        alt={name}
        className="w-[50px] h-[50px]"
      />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2> 
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">&#8377; {price}</span> 
          <div className="flex justify-center items-center gap-2 absolute right-7"> 
            <AiOutlinePlus onClick={handleIncrement}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span> 
            <AiOutlineMinus onClick={handleDecrement}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ItemCart.propTypes = { 
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default ItemCart;
