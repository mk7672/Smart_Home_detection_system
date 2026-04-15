import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await API.get("/events");
        setEvents(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEvents();
  }, []);

  const latest = events[0];

  const humans = events.filter(e => e.label === "human").length;
  const pets = events.filter(e => e.label === "pet").length;

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        {/* STATS */}
        <div className="p-6 grid grid-cols-3 gap-6">
          <Card title="Intrusions" value={events.length} icon="🚨" color="text-red-500" />
          <Card title="Humans" value={humans} icon="👤" color="text-yellow-400" />
          <Card title="Pets" value={pets} icon="🐶" color="text-green-400" />
        </div>

        {/* LIVE FEED */}
        <div className="px-6">
          <div className="bg-slate-800 p-6 rounded-2xl">
            <h2 className="text-lg mb-4">Live Feed</h2>

            {latest ? (
              <>
                <img
                  src={latest.image_url}
                  className="rounded-xl mb-3 w-full max-h-80 object-cover"
                />

                <p className="text-gray-300">
                  {latest.label} detected ({Math.round(latest.confidence * 100)}%)
                </p>
              </>
            ) : (
              <p>No data yet</p>
            )}
          </div>
        </div>

        {/* TABLE */}
        <div className="p-6">
          <div className="bg-slate-800 p-6 rounded-2xl">
            <h2 className="mb-4">Recent Events</h2>

            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400">
                  <th>Image</th>
                  <th>Type</th>
                  <th>Confidence</th>
                  <th>Time</th>
                </tr>
              </thead>

              <tbody>
                {events.map((e, i) => (
                  <tr key={i} className="border-t border-gray-700">
                    <td>
  {e.image_url ? (
    <img
      src={e.image_url}
      alt="event"
      className="w-16 h-16 object-cover rounded"
    />
  ) : (
    "No Image"
  )}
</td>
                    <td>{Math.round(e.confidence * 100)}%</td>
                    <td>{new Date(e.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}