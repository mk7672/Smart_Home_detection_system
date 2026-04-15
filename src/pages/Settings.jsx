import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 w-full">
        <h2 className="text-xl mb-4">Settings</h2>

        <button className="bg-blue-600 p-2 rounded">
          Change Password
        </button>
      </div>
    </div>
  );
}