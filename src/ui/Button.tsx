import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

type ButtonProps = {
  id: number;
};

export const Button = ({ id }: ButtonProps) => {
  const { cart, handleItem } = useContext(CartContext);
  const itemSelected = cart.some((item) => item.id === id);
  return (
    <button
      className={`btn ${itemSelected ? "btn-selected" : "btn-not-selected"}`}
      onClick={() => handleItem({ id })}
    >
      {itemSelected ? "Wybrane" : "Wybierz"}
    </button>
  );
};
