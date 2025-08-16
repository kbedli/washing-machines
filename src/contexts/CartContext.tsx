import { createContext, useState } from "react";

type CartItem = {
  id: number;
  image: string;
  title: string;
  price: number;
};

type CartContextType = {
  cart: CartItem[];
  handleItem: (item: CartItem) => void;
};

const defaultValues: CartContextType = {
  cart: [],
  handleItem: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType>(defaultValues);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  //   TO ADD OR DELETE ITEM FROM THE CART
  const handleItem = (item: CartItem) => {
    setCart((data) => {
      const itemExists = data.find(
        (washingMachine) => washingMachine.id === item.id
      );
      if (itemExists) {
        return data.filter((washingMachine) => washingMachine.id !== item.id);
      } else {
        return [...data, item];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, handleItem }}>
      {children}
    </CartContext.Provider>
  );
};
