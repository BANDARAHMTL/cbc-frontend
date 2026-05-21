import { Link } from "react-router-dom"
import "../index.css"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-2xl rounded-2xl p-10 w-[400px]">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Login
        </h1>

        <div className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300">
            Login
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition duration-300">
            Cancel
          </button>

        </div>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account?
        </p>

        <div className="text-center mt-2">
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create Account
          </Link>
        </div>

      </div>

    </div>
  )
}