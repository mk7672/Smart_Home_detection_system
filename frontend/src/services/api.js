const API_BASE = "http://localhost:3000/api";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${API_BASE}/events/upload`, {
    method: "POST",
    body: formData,
  });

  return res.json();
};

export const getEvents = async () => {
  const res = await fetch(`${API_BASE}/events`);
  return res.json();
};