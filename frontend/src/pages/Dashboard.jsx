import { useEffect, useState } from "react";
import { uploadImage, getEvents } from "../services/api";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    const data = await getEvents();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);

    if (selected) {
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);

    const res = await uploadImage(file);
    console.log(res);

    setLoading(false);
    setFile(null);
    setPreview(null);

    fetchEvents();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>🏠 Smart Home Dashboard</h2>

      {/* 🔥 Upload Card */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "30px",
          background: "#f9f9f9",
          maxWidth: "400px",
        }}
      >
        <h3 style={{ marginBottom: "15px" , color: "black" }}>📤 Upload Image</h3>

        {/* File Input */}
        <input
          type="file"
          onChange={handleFileChange}
          style={{ marginBottom: "10px" }}
        />

        {/* Preview */}
        {preview && (
          <div style={{ margin: "10px 0" }}>
            <img
              src={preview}
              alt="preview"
              style={{
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: loading ? "#999" : "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {loading ? "Processing..." : "Upload Image"}
        </button>
      </div>

      {/* 🔥 Events Section */}
      <div>
        <h3 style={{ marginBottom: "15px" }}>📊 Detection History</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {events.map((e, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
                background: "#fff",
              }}
            >
              <img
                src={e.image_url}
                alt="event"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />

              <p>
                <strong>Label:</strong> {e.label}
              </p>

              <p>
                <strong>Confidence:</strong>{" "}
                {e.confidence.toFixed(2)}
              </p>

              {/* 🔥 Alert Highlight */}
              {e.label === "person" && (
                <p style={{ color: "red", fontWeight: "bold" }}>
                  🚨 INTRUSION DETECTED
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;