import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 p-4">
      <h1 className="text-xl font-bold mb-6">SecureHome</h1>

      <ul className="space-y-4">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/alerts">Alerts</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}