import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TicketForm from "../components/TicketsForm";
import TicketList from "../components/TicketsList";
import ConfirmModal from "../components/ConfirmModal"; // 👈 import the modal

export default function TicketsPage() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [editingTicket, setEditingTicket] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [ticketToDelete, setTicketToDelete] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    if (!session) {
      navigate("/auth/login");
      return;
    }
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
  }, [navigate]);

  const saveTickets = (updated) => {
    setTickets(updated);
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  const handleAdd = (ticketData) => {
    const newTicket = { id: Date.now(), ...ticketData, createdAt: new Date() };
    saveTickets([...tickets, newTicket]);
  };

  const handleUpdate = (updatedData) => {
    const updated = tickets.map((t) =>
      t.id === editingTicket.id ? { ...t, ...updatedData } : t
    );
    saveTickets(updated);
    setEditingTicket(null);
  };

  const handleDeleteClick = (id) => {
    setTicketToDelete(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    const updated = tickets.filter((t) => t.id !== ticketToDelete);
    saveTickets(updated);
    setShowConfirm(false);
    setTicketToDelete(null);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Tickets</h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition"
        >
          Back to Dashboard
        </button>
      </div>

      <TicketForm
        key={editingTicket ? editingTicket.id : "new"}
        initialData={editingTicket}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
      />

      <TicketList
        tickets={tickets}
        onEdit={setEditingTicket}
        onDelete={handleDeleteClick}
      />

      {/* ✅ Confirmation Modal */}
      <ConfirmModal
        isOpen={showConfirm}
        title="Delete Ticket"
        message="Are you sure you want to delete this ticket? This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={() => setShowConfirm(false)}
      />
    </div>
  );
}
