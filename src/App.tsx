import "./App.css";
import { FilteringInputs } from "./components/FilteringInputs";
import { ListOfItems } from "./components/ListOftems";
import { SearchInput } from "./components/SearchInput";
import { Cart } from "./components/Cart";
import { CartIcon } from "./ui/CartIcon";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-centered">
          <h1 className="title">Wybierz urządzenie</h1>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </div>
      </div>

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchInput />
                <FilteringInputs />
                <ListOfItems />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
