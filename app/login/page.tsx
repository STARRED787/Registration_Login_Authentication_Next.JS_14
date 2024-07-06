"use client";
import React, { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

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
        Loging
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
        SignUp
      </button>
      <Link href="/login"> You dont Have Acount Please Regiter</Link>
    </div>
  );
}
