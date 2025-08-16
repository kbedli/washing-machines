import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

type ButtonProps = {
  id: number;
  image: string;
  title: string;
  price: number;
};

export const Button = ({ id, image, title, price }: ButtonProps) => {
  const { cart, handleItem } = useContext(CartContext);
  const itemSelected = cart.some((item) => item.id === id);
  return (
    <button
      className={`btn ${itemSelected ? "btn-selected" : "btn-not-selected"}`}
      onClick={() => handleItem({ id, image, title, price })}
    >
      {itemSelected ? "Wybrane" : "Wybierz"}
    </button>
  );
};
