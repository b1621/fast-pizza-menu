import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className=" flex bg-yellow-500 py-3">
      <Link className=" tracking-wider" to="/">
        Fast Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
