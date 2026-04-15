export default function Card({ title, value, icon }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className="text-2xl font-bold mt-2 text-gray-800">{value}</p>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );
}