type Sensor = {
  id: number;
  name: string;
  image: string;
  value: string;
};

function DeviceCard({ sensor }: { sensor: Sensor }) {
  const { id, name, image } = sensor;

  return (
    <div className="h-64 w-64 rounded-2xl border border-black p-4">
      <h1 className="text-2xl">{name}</h1>
    </div>
  );
}

export default DeviceCard;
