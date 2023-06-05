function Header() {
  return (
    <div className="flex items-center justify-between rounded-xl border border-black p-4 ">
      <div>
        <h1 className="text-4xl">
          Hello, <span className="font-semibold">Manupa!</span>
        </h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          nulla.
        </p>
      </div>
      <h1 className="text-6xl font-semibold">13:57</h1>
    </div>
  );
}

export default Header;
