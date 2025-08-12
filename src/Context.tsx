import { createContext, useState } from "react";
import data from "./data";

type Item = {
  id: number;
  title: string;
  capacity: number;
  dimensions: string;
  functions: string;
  energyClass: string;
  priceValidityDate: string;
  price: number;
  instalments: string;
};

type GlobalContextType = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

const defaultValues: GlobalContextType = {
  items: data,
  setItems: (() => {}) as React.Dispatch<React.SetStateAction<Item[]>>,
};

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext<GlobalContextType>(defaultValues);

const GlobalState = () => {
  const [items, setItems] = useState<Item[]>(data);

  return { items, setItems };
};

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { items, setItems } = GlobalState();
  return (
    <GlobalContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
