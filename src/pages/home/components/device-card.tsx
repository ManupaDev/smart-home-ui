type Device = {
  id: number;
  name: string;
  image: string;
  state: boolean;
};

function DeviceCard({ device }: { device: Device }) {
  const { id, name, image, state } = device;

  return (
    <div className="h-64 w-64 rounded-2xl border border-black p-4">
      <h1 className="text-2xl">{name}</h1>
    </div>
  );
}

export default DeviceCard;
