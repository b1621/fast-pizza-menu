const Loader = () => {
  return (
    // inset-0 = top-0 bottom-0 left-0 right-0
    <div className="absolute inset-0 flex w-full items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <p className="mr-5 w-fit text-5xl font-semibold">Loading </p>
      <div className="loader h-7"></div>
    </div>
  );
};

export default Loader;
