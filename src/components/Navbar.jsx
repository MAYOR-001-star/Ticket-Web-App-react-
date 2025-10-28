import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const navigate = useNavigate();
  const [session, setSession] = useState(
    localStorage.getItem("ticketapp_session")
  );
  const [open, setOpen] = useState(false);

  // re-check session on storage change (logout in other pages/tabs)
  useEffect(() => {
    const handleStorage = () => {
      setSession(localStorage.getItem("ticketapp_session"));
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Update session when user logs in or out
  useEffect(() => {
    setSession(localStorage.getItem("ticketapp_session"));
  });

  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    setSession(null);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          TicketX
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 items-center">
          {session ? (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
                Dashboard
              </Link>
              <Link to="/tickets" className="text-gray-700 hover:text-blue-600">
                Tickets
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
              >
                Logout
              </button>
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 flex flex-col gap-4">
          {session ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                Dashboard
              </Link>
              <Link
                to="/tickets"
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                Tickets
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
