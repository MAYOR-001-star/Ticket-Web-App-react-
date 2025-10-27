import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    closed: 0,
  });

  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    if (!session) {
      navigate("/auth/login");
      return;
    }

    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setStats({
      total: tickets.length,
      open: tickets.filter((t) => t.status === "open").length,
      inProgress: tickets.filter((t) => t.status === "in_progress").length,
      closed: tickets.filter((t) => t.status === "closed").length,
    });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/");
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
        >
          Logout
        </button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow p-6 rounded-xl border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-medium">Total Tickets</h3>
          <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-medium">Open Tickets</h3>
          <p className="text-2xl font-bold text-gray-800">{stats.open}</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl border-l-4 border-amber-500">
          <h3 className="text-gray-500 text-sm font-medium">
            In Progress Tickets
          </h3>
          <p className="text-2xl font-bold text-gray-800">{stats.inProgress}</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl border-l-4 border-gray-500">
          <h3 className="text-gray-500 text-sm font-medium">Closed Tickets</h3>
          <p className="text-2xl font-bold text-gray-800">{stats.closed}</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/tickets")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
        >
          Manage Tickets
        </button>
      </div>
    </div>
  );
}
