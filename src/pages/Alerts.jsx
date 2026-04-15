import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import API from "../api";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    API.get("/events").then(res => {
      const humans = res.data.filter(e => e.label === "human");
      setAlerts(humans);
    });
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 w-full">
        <h2 className="text-xl mb-4">Alerts</h2>

        {alerts.map((a, i) => (
          <div key={i} className="bg-red-600 p-4 rounded mb-4">
            🚨 Human detected ({Math.round(a.confidence * 100)}%)
          </div>
        ))}
      </div>
    </div>
  );
}