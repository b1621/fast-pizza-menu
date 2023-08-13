// import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function CartOverview() {
  return (
    // <div className=" absolute bottom-0 border py-3">
    <div className=" flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-8">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-8">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <LinkButton to="/cart">Open cart &rarr;</LinkButton>
    </div>
  );
}

export default CartOverview;
