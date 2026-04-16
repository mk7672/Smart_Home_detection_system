export default function Card({ title, value, icon, color }) {
  return (
    <div className="bg-slate-800 p-5 rounded-2xl shadow-md flex justify-between items-center">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <h2 className="text-2xl font-bold text-white">{value}</h2>
      </div>
      <div className={`text-3xl ${color}`}>
        {icon}
      </div>
    </div>
  );
}