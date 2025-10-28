import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      {/* Decorative Circles */}
      <div className="hidden md:block bg-blue-300  w-20 h-20 rounded-full absolute left-[5rem] top-[4rem] opacity-50 floating"></div>

      <div className="hidden md:block bg-blue-300  w-32 h-32 rounded-full absolute left-[36rem] bottom-[6.5rem] lg:left-[66rem] lg:bottom-[6rem] opacity-50 floating z-50"></div>

      {/* Hero Content */}
      <div className="max-w-[800px] z-20 py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
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
        className="hidden md:block relative z-10 w-full"
      />
    </section>
  );
}
