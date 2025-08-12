import { useContext } from "react";
import { GlobalContext } from "../Context";

export const ListOfItems = () => {
  const { items } = useContext(GlobalContext);
  return (
    <div className="list-of-items">
      {items.map((item) => {
        const {
          id,
          title,
          capacity,
          dimensions,
          functions,
          energyClass,
          priceValidityDate,
          price,
          instalments,
        } = item;
        return (
          <article className="item" key={id}>
            <p>{title}</p>
            <p>{capacity}</p>
            <p>{dimensions}</p>
            <p>{functions}</p>
            <p>{energyClass}</p>
            <p>{priceValidityDate}</p>
            <p>{price}</p>
            <p>{instalments}</p>
          </article>
        );
      })}
    </div>
  );
};
