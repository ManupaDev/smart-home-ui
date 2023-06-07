function LocationChip({
  selectedLocation,
  location,
  handleLocationSelect,
}: {
  selectedLocation: string;
  location: string;
  handleLocationSelect: (location: string) => void;
}) {
  const handleClick = () => {
    handleLocationSelect(location);
  };

  if (selectedLocation === location) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="block  rounded-lg  border-black bg-casual-blue  px-2 py-1 text-white"
      >
        {location}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="block rounded-lg border border-smoke-500  bg-white px-2 py-1"
    >
      {location}
    </button>
  );
}

export default LocationChip;
