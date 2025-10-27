import { Link } from "react-router-dom";

export default function Navbar() {
  const session = localStorage.getItem("ticketapp_session");

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          TicketApp
        </Link>
        <div className="flex gap-5">
          {session ? (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
                Dashboard
              </Link>
              <Link to="/tickets" className="text-gray-700 hover:text-blue-600">
                Tickets
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link to="/auth/signup" className="text-gray-700 hover:text-blue-600">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
