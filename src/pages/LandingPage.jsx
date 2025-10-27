import { Link } from "react-router-dom";
// import wave from "../assets/hero-wave.svg";

export default function LandingPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      {/* Decorative Circles */}
      <div class="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-70"></div>
      <div class="absolute bottom-44 right-20 w-32 h-32 bg-blue-300 rounded-full blur-2xl opacity-50"></div>

      {/* Hero Content */}
      <div className="max-w-[800px] z-10 py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Manage Your Tickets Seamlessly
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A powerful and intuitive platform to create, track, and manage your
          support tickets efficiently.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/auth/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="border border-blue-600 text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-md transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Hero Wave */}
      <img
        src="/wave.svg"
        alt="wave background"
        className="mt-0"
      />
    </section>
  );
}
