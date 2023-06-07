import { XMarkIcon } from "@heroicons/react/24/solid";
import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

export function SearchBar({
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
      <div className="flex w-fit items-center gap-x-4 rounded-lg border border-black px-2 ">
        <input
          type="search"
          className="rounded-lg py-1 focus:outline-none"
          name="device"
          onChange={handleChange}
          value={search}
          placeholder="Search..."
          id="device-search"
        />
        <XMarkIcon width={16} height={16} onClick={handleClear} />
      </div>
    </form>
  );
}
