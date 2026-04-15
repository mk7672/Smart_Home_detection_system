import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6 grid grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded">Intrusions: 5</div>
          <div className="bg-gray-800 p-4 rounded">Humans: 3</div>
          <div className="bg-gray-800 p-4 rounded">Pets: 2</div>
        </div>

        <div className="p-6">
          <div className="bg-gray-800 p-6 rounded">
            <h3>Live Feed</h3>
            <p>Latest detection: Human (95%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}