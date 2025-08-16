import "./App.css";
import { FilteringInputs } from "./components/FilteringInputs";
import { ListOfItems } from "./components/ListOftems";
import { SearchInput } from "./components/SearchInput";
import { CartIcon } from "./ui/CartIcon";

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <h1 className="title">Wybierz urządzenie</h1>
        <CartIcon />
      </div>
      <SearchInput />
      <FilteringInputs />
      <ListOfItems />
    </div>
  );
}

export default App;
