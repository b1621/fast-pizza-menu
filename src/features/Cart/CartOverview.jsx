// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LinkButton from "../../ui/LinkButton";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    // <div className=" absolute bottom-0 border py-3">
    <div className=" flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-8">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-8">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <LinkButton to="/cart">Open cart &rarr;</LinkButton>
    </div>
  );
}

export default CartOverview;
