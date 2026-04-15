import Sidebar from "../components/Sidebar";

export default function Alerts() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 w-full">
        <h2 className="text-xl mb-4">Alerts</h2>

        <div className="bg-red-600 p-4 rounded mb-4">
          🚨 Human detected at 10:45 PM (95%)
        </div>

        <div className="bg-red-600 p-4 rounded">
          🚨 Unknown motion detected
        </div>
      </div>
    </div>
  );
}