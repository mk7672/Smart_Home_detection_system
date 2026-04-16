import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const linkClass = (path) =>
    `block px-3 py-2 rounded-lg ${
      location.pathname === path ? "bg-slate-700" : "hover:bg-slate-700"
    }`;

  return (
    <div className="w-64 h-screen bg-gray-800 p-4">
      <h1 className="text-xl font-bold mb-6">SecureHome</h1>

      <ul className="space-y-4">
        <li><Link className={linkClass("/dashboard")} to="/dashboard">Dashboard</Link></li>
        <li><Link className={linkClass("/alerts")} to="/alerts">Alerts</Link></li>
        <li><Link className={linkClass("/history")} to="/history">History</Link></li>
        <li><Link className={linkClass("/settings")} to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}