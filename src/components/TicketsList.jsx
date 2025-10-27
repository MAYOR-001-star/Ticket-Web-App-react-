export default function TicketList({ tickets, onEdit, onDelete }) {
  if (tickets.length === 0) {
    return (
      <p className="text-gray-600 text-center mt-8">
        No tickets found. Create your first one above!
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-white shadow-md p-5 rounded-xl border-l-4 border-blue-500"
        >
          <h3 className="text-xl font-semibold">{ticket.title}</h3>
          <p className="text-gray-600 mt-2 line-clamp-3">
            {ticket.description}
          </p>

          <div className="mt-4 text-sm text-gray-500">
            <p>
              <strong>Priority:</strong> {ticket.priority}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {ticket.status.replace("_", " ").toUpperCase()}
            </p>
          </div>

          <div className="flex gap-3 mt-5">
            <button
              onClick={() => onEdit(ticket)}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(ticket.id)}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
