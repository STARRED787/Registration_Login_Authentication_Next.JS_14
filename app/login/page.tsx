"use client";
import React, { use, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Axios from "axios";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [ButtonDisable, setButtonDisable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await Axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success Welcome");
      router.push("/profile");
    } catch (error: any) {
      console.log("login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [user]);

  return (
    <div
      className="flex flex-col items-center
    justify-center min-h-screen py-2
    "
    >
      <h1
        className=" font-semibold text-4xl text-white
      mb-4
      "
      >
        {loading ? "Processing" : "LogIn"}
      </h1>
      <hr />

      <label htmlFor="email">Email</label>
      <input
        className="border border-gray-300 
        p-2 rounded-lg mb-2"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="border border-gray-300 
        p-2 rounded-lg "
        type="password"
        id="epassword"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button
        className="
        mt-2  p-2 border border-white rounded-lg 
      focus:outline-none bg-green-600 text-black
       font-semibold mb-2
      "
        onClick={onLogin}
      >
        {ButtonDisable ? "login" : "Login"}
      </button>
      <Link href="/signup"> You dont Have Account Register here</Link>
    </div>
  );
}
