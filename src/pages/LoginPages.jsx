import { useForm } from "react-hook-form";
import { login } from "../api";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";

export default function LoginPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data) {
    try {
      setIsSubmitting(true);
      const token = await login(data.username, data.password);

      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
        setIsSubmitting(false);
        return;
      }

      setError("root.data", { type: "manual", message: "Invalid data" });
      setIsSubmitting(false);
    } catch (error) {
      console.log("Login error:", error);
      setIsSubmitting(false);
    }
  }
  return (
    <main className="p-4 flex flex-col gap-10">
      <h1 className="text-2xl w-full font-bold text-center">Login</h1>
      <section className="flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-white/10 p-4 rounded-md flex flex-col gap-4 max-w-md w-full"
        >
          <div className="flex flex-col w-full gap-4">
            <input
              type="text"
              className={clsx("bg-black border border-white/10 rounded-md", {
                "bg-red-500/10 border-red-500": errors.username,
              })}
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
            />

            {errors.username && (
              <span className="text-xs text-red-600">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full gap-4">
            <input
              type="password"
              className={clsx("bg-black border border-white/10 rounded-md", {
                "bg-red-500/10 border border-red-500": errors.password,
              })}
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            {errors.username && (
              <span className="text-xs text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold rounded-md disabled:bg-neutral-600 disabled:cursor-progress"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Login"}
          </button>
          {errors.root?.data && (
            <span className="text-xm text-red-600 w-full text-center uppercase">
              {errors.root.data.message}
            </span>
          )}
        </form>
      </section>
    </main>
  );
}
