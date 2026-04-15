import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import API from "../api";

export default function History() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events").then(res => setEvents(res.data));
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 w-full">
        <h2 className="text-xl mb-4">Event History</h2>

        <table className="w-full bg-gray-800">
          <thead>
            <tr>
              <th>Type</th>
              <th>Confidence</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {events.map((e, i) => (
              <tr key={i}>
                <td>{e.label}</td>
                <td>{Math.round(e.confidence * 100)}%</td>
                <td>{new Date(e.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}