import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/Cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="relative min-h-screen font-sans font-serif ">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
