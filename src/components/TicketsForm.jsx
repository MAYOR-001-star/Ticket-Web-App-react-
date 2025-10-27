import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ticketSchema } from "../lib/validation";

export default function TicketForm({ initialData, onAdd, onUpdate }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ticketSchema),
    defaultValues: initialData || {
      title: "",
      description: "",
      priority: "low",
      status: "open",
    },
  });

  const onSubmit = (data) => {
    if (initialData) onUpdate(data);
    else onAdd(data);
    reset();
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-xl mb-10">
      <h2 className="text-2xl font-semibold mb-4">
        {initialData ? "Edit Ticket" : "Create New Ticket"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            {...register("title")}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description")}
            rows={3}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Priority</label>
            <select
              {...register("priority")}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Status</label>
            <select
              {...register("status")}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
        >
          {initialData ? "Update Ticket" : "Add Ticket"}
        </button>
      </form>
    </div>
  );
}
