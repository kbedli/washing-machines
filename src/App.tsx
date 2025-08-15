import { useContext } from "react";
import "./App.css";
import { FilteringInputs } from "./components/FilteringInputs";
import { ListOfItems } from "./components/ListOftems";
import { SearchInput } from "./components/SearchInput";
import { GlobalContext } from "./Context";

function App() {
  const { allItems } = useContext(GlobalContext);
  return (
    <div className="container">
      <h1 className="title">Wybierz urządzenie</h1>
      <SearchInput />
      <FilteringInputs />
      <p className="items-count">Liczba wyników: {allItems.length}</p>
      <ListOfItems />
    </div>
  );
}

export default App;
