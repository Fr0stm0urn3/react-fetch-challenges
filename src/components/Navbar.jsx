import { NavLink } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <button onClick={() => setIsOpen((prev) => !prev)}>Open Challenges List</button>
      {isOpen && (
        <ul className="flex justify-center items-center">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-yellow-200" : "text-green-500"
              }
            >
              Challenge One
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/challenge-two"}
              className={({ isActive }) =>
                isActive ? "text-yellow-200" : "text-green-500"
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
