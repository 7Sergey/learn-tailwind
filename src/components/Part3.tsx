const Part3 = () => {
  return (
    <div className="container">
      <header className="flex items-center justify-between">
        <div
          className="hover:text-green-500 cursor-pointer
         transition-colors duration-300 ease-in-out shadow-xl
         shadow-green-500/15 bg-green-50/10 px-5 py-2 "
        >
          logo
        </div>
        <ul className="flex items-center gap-4">
          <li>sdf</li>
          <li>sfsdf</li>
          <li>gdsdg</li>
        </ul>
        <button className="animate-bounce">Contact me</button>
      </header>
      <section className="grid grid-cols-3 gap-5 mt-10">
        <div className="rotate-12">image</div>
        <div className="blur-md">image</div>
        <div>image</div>
        <div>image</div>
        <div>image</div>
      </section>
    </div>
  );
};

export default Part3;
