"use client";
import React, { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

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
        SignUp
      </h1>
      <hr />
      <label htmlFor="username">UseName</label>
      <input
        className="border border-gray-300 
        p-2 rounded-lg mb-2 "
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />

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
        onClick={onSignup}
      >
        SignUp
      </button>
      <Link href="/login"> Visit to login</Link>
    </div>
  );
}
