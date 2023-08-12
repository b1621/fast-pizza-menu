import { Outlet } from "react-router-dom";
import CartOverview from "../features/Cart/CartOverview";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
