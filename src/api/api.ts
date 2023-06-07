export const getAllDevices = async () => {
  const res = await fetch("http://localhost:5174/api/devices", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const response = await res.json();
  console.log(response.data);
  return response.data;
};
