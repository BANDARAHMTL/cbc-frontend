import { useState } from "react"

export default function Testing() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState("Student")

  function increment() {
    if (count < 100) {
      setCount(count + 10)
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 10)
    }
  }

  function changeName(value) {
    setName(value)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">

      <div className="bg-white shadow-xl rounded-2xl p-8 text-center w-[350px]">

        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          {name}
        </h1>

        <div className="flex items-center justify-center gap-5 mb-8">

          <button
            className="bg-red-500 hover:bg-red-600 text-white text-2xl px-4 py-2 rounded-xl"
            onClick={decrement}
          >
            -
          </button>

          <span className="text-3xl font-bold text-gray-800">
            {count}
          </span>

          <button
            className="bg-green-500 hover:bg-green-600 text-white text-2xl px-4 py-2 rounded-xl"
            onClick={increment}
          >
            +
          </button>

        </div>

        <div className="grid grid-cols-2 gap-3">

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
            onClick={() => changeName("Students")}
          >
            Student
          </button>

          <button
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg"
            onClick={() => changeName("Teacher")}
          >
            Teacher
          </button>

          <button
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
            onClick={() => changeName("Admins")}
          >
            Admin
          </button>

          <button
            className="bg-black hover:bg-gray-800 text-white py-2 rounded-lg"
            onClick={() => changeName("Tharindu")}
          >
            Tharindu
          </button>

        </div>

      </div>

    </div>
  )
}