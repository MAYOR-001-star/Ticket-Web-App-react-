import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../lib/validation";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === data.email && u.password === data.password
    );
    if (!user) {
      toast.error("Invalid email or password", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    localStorage.setItem("ticketapp_session", JSON.stringify(user));
    toast.success("Login successful!", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  return (
    <div className="max-w-md mx-auto my-16 bg-white shadow-md p-8 rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Login
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition"
        >
          Sign In
        </button>

        <p className="text-center text-sm mt-3">
          Don’t have an account?{" "}
          <Link to="/auth/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>

      {/* Toast container (must be present once in the tree) */}
      <ToastContainer />
    </div>
  );
}
