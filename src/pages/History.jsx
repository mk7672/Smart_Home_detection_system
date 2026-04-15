import Sidebar from "../components/Sidebar";

export default function History() {
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
            <tr>
              <td>Human</td>
              <td>95%</td>
              <td>10:45 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}