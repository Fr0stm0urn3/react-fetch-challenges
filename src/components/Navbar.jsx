import { NavLink } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-center flex-col">
      <button
        className="bg-black text-white py-4 px-6 my-2 mx-auto rounded-xl"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "Close Challenge List" : "Open Challenge List"}
      </button>
      {isOpen && (
        <ul className="flex flex-col items-center mt-2 gap-2">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-black uppercase underline font-bold" : "text-gray-500"
              }
            >
              Challenge One
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/challenge-two"}
              className={({ isActive }) =>
                isActive ? "text-black uppercase underline font-bold" : "text-gray-500"
              }
            >
              Challenge Two
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
