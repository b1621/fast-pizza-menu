import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to }) => {
  const className =
    "inline-block rounded-full border bg-yellow-400 px-4 py-2 font-semibold uppercase tracking-wider text-stone-800     transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed  ";
  if (to)
    return (
      <Link className={className} to={to}>
        {" "}
        {children}{" "}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
