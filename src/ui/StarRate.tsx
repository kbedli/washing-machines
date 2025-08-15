import { FaStar } from "react-icons/fa";

type StarRateProps = {
  rating: number;
};

export const StarRate = ({ rating }: StarRateProps) => {
  return (
    <div className="stars">
      <p className="item-property margin-r5">Popularność: </p>

      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          color={index < rating ? "#00a651" : "#ccc"}
          size={20}
        />
      ))}
    </div>
  );
};
