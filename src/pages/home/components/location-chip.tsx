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
        className="block  rounded-3xl   border-black bg-black  px-4 py-2 text-white"
      >
        {location}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="block rounded-3xl border border-smoke-700  bg-white px-4 py-2"
    >
      {location}
    </button>
  );
}

export default LocationChip;
