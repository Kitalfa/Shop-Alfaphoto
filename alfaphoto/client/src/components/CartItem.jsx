//context hook
import { useContext } from 'react';
//context
import { CartContext } from '../context/CartContext';
//link
import { Link } from 'react-router-dom';
//icon
import { IoClose } from 'react-icons/io5';
//component
import Qty from '../components/Qty';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <>
      <div className="flex gap-x-8">
        <Link to={`product/${item.id}`} className="w-[70px] h-[70px]">
          <img
            src={`${import.meta.env.VITE_APP_API_URL_PRODUCTS}${
              item.attributes.image.data[0].attributes.url
            }`}
            alt=""
          />
        </Link>
        <div className="flex-1">
          {/* titre & remove icon */}
          <div className="flex gap-x-4 mb-3">
            <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
            <div
              onClick={() => removeFromCart(item.id)}
              className="cursor-pointer text-[24px] hover:text-accent transition-all"
            >
              <IoClose />
            </div>
          </div>
          <div className="flex items-center gap-x-12">
            {/* quantity*/}
            <div className="flex gap-x-4 mb-2">
              <Qty item={item} />
              <div>
                <div className="text-accent text-xl">
                  $ {item.attributes.price * item.amount}
                </div>
              </div>
            </div>
          </div>
          {/* price*/}
          <div>
            <span className="text-accent">
              $ {item.attributes.price} per piece
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
