import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">Dummy Login</h1>
      <button
        onClick={() => navigate("/Dashboard")}
        className="bg-blue-600 text-white px-4 py-2 rounded "
      >
        Login(Dummy)
      </button>
    </div>
  );
}
