const LazyLoader = () => {
  return (
    <section className="">
      <div className="flex justify-center items-center space-x-2 h-screen bg-white dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-8 h-8 bg-black rounded-full animate-bounce"></div>
      </div>
    </section>
  );
};
export default LazyLoader;
