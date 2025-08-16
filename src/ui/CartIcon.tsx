import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export const CartIcon = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-icon-container">
      <FaShoppingCart />
      <div className="amount-container">
        <p className="total-amount">{cart.length}</p>
      </div>
    </div>
  );
};
