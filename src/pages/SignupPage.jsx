import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../lib/validation";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignupPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((u) => u.email === data.email);

    if (userExists) {
      toast.error("Email already exists", {
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

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Account created successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });

    setTimeout(() => navigate("/auth/login"), 2000);
  };

  return (
    <div className="max-w-md mx-auto my-16 bg-white shadow-md p-8 rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

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
          Create Account
        </button>

        <p className="text-center text-sm mt-3">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </form>

      {/* Toast container (only one per app) */}
      <ToastContainer />
    </div>
  );
}
