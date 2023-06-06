function LocationChip({
  location,
}: {
  location: string;
}) {
  

 

  return (
    <button
      type="button"
      className="block rounded-md border border-black px-2 py-1"
    >
      {location}
    </button>
  );
}

export default LocationChip;
