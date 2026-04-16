import { useEffect, useState } from "react";
import { getEvents } from "../services/api";

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    getEvents().then((data) => {
      const filtered = data.filter((e) => e.label === "person");
      setAlerts(filtered);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚨 Alerts</h2>

      {alerts.length === 0 && <p>No alerts</p>}

      {alerts.map((a, i) => (
        <div key={i}>
          <img src={a.image_url} width="200" />
          <p>Intrusion detected!</p>
        </div>
      ))}
    </div>
  );
}

export default Alerts;