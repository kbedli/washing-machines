import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, handleItem } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Twój koszyk</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Koszyk jest pusty...</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-info">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-price">{item.price} zł</p>
              </div>
              <button className="remove-btn" onClick={() => handleItem(item)}>
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <Link to="/">
          <button className="btn btn-not-selected back-to-store">
            Wróć do sklepu
          </button>
        </Link>
      </div>
    </div>
  );
};
