import { Button } from "../ui/Button";
import { StarRate } from "../ui/StarRate";

type SingleItemProps = {
  image: string;
  title: string;
  capacity: number;
  dimensions: string;
  functions: string[];
  energyClass: string;
  priceValidityDate: string;
  price: number;
  instalments: string;
  popularity: number;
};

export const SingleItem = ({
  image,
  title,
  capacity,
  dimensions,
  functions,
  energyClass,
  priceValidityDate,
  price,
  instalments,
  popularity,
}: SingleItemProps) => {
  return (
    <div className="item">
      <img src={image} alt="Washing machine" className="item-image" />
      <div className="margin-b30">
        <p className="item-name">{title.split("Pralka")[0]}Pralka</p>
        <p className="item-name">{title.split("Pralka")[1]}</p>
      </div>
      <p className="item-property">
        Pojemność (kg): <span className="item-property-span">{capacity}</span>
      </p>
      <p className="item-property">
        Wymiary (GxSxW):{" "}
        <span className="item-property-span">{dimensions}</span>
      </p>
      <p className="item-property margin-b10">
        Funkcje:
        <span className="item-property-span">{functions.join(", ")}</span>
      </p>
      <p className="item-property margin-b10">
        Klasa energetyczna:
        <span className="energy-label"> {energyClass}</span>
      </p>
      <p className="item-property">Cena obowiązuje: {priceValidityDate}</p>
      <p className="price margin-b10">
        <span className="price-main">{Math.floor(price)}</span>
        <span className="price-suffix">
          <sup className="price-grosze">
            {String((price % 1).toFixed(2).split(".")[1])}
          </sup>
          <span className="price-zl">zł</span>
        </span>
      </p>
      <p className="installments margin-b10">{instalments}</p>
      <StarRate rating={popularity} />
      <Button />
    </div>
  );
};
