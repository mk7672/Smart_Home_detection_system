export default function Navbar() {
  return (
    <div className="bg-gray-800 shadow p-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-white">Dashboard</h2>

      <div className="flex items-center gap-6">
        <span className="cursor-pointer">🔔</span>
        <span className="text-green-400">● Online</span>
        <span className="cursor-pointer">👤</span>
      </div>
    </div>
  );
}