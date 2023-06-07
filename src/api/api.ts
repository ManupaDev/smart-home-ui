export const getAllDevices = async () => {
  const res = await fetch(
    "https://smart-home-ui-api-production.up.railway.app/api/devices",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const response = await res.json();
  return response.data;
};
