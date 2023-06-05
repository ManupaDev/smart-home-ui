import { XMarkIcon } from "@heroicons/react/24/solid";
import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

export function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form className="my-4 border-black" onSubmit={handleSubmit}>
      <div className="flex w-fit items-center gap-x-4 px-2 rounded-lg border border-black ">
        <input
          type="search"
          className="rounded-lg focus:outline-none py-1"
          name="device"
          onChange={handleChange}
          value={search}
          placeholder="Search..."
          id="device-search"
        />
        <XMarkIcon width={16} height={16} onClick={()=>(setSearch(""))}/>
      </div>
    </form>
  );
}
