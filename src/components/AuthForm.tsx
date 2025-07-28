"use client";

import { useForm } from "react-hook-form";
import { email, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../lib/api";
import { useRouter } from "next/navigation";
import { ca } from "zod/locales";
import "sweetalert2";
import Swal from "sweetalert2";
import { stringify } from "querystring";
import { useState } from "react";
import LoadingOverlay from "./LoadingOverlay";

type Props = { type: "login" | "register" };

const schema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export default function AuthForm({ type }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const endpoint = type == "login" ? "/api/login" : "/api/register";
      await api.post(endpoint, data);
      router.push("/dashboard");
    } catch (err: any) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Ops!",
        text: err.toString(),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingOverlay show={true} message="Logging In . . ." />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            className=" w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className=" block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            className=" w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className=" w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
        >
          {type === "login" ? "Login" : "Register"}
        </button>
      </form>
    </>
  );
}
