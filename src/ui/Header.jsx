import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header className=" flex border py-3">
      <Link to="/">Fast Pizza Co.</Link>

      <SearchOrder />
    </header>
  );
};

export default Header;
