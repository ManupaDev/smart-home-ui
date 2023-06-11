import { XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { ChangeEvent, FormEvent } from "react";

export default function SearchBar({
  search,
  handleChange,
  handleClear,
}: {
  search: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
}) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <form className="my-4 border-black" onSubmit={handleSubmit}>
      <div className="flex bg-white w-80 justify-between items-center gap-x-4 rounded-3xl border-2  border-black px-4 [y-2] ">
        <input
          type="search"
          className="rounded-lg py-1 focus:outline-none"
          name="device"
          onChange={handleChange}
          value={search}
          placeholder="Search..."
          id="device-search"
        />
        <XMarkIcon width={16} height={16} onClick={handleClear} className={clsx("block",{"hidden":(search === "")})}/>
      </div>
    </form>
  );
}
