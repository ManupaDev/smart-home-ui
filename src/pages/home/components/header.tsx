function Header() {
  return (
    <div className="bg-underlay-1 flex  items-center justify-between rounded-2xl border-black   p-4 text-white ">
      <h1 className="text-4xl ">
        Hello, <span className="font-semibold ">Manupa!</span>
      </h1>
      <div className="flex  flex-col items-end">
        <h1 className="text-4xl font-semibold">13:57</h1>
        <p className="mt-2">8th Thursday June 2023</p>
      </div>
    </div>
  );
}

export default Header;
