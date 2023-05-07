import { NavLink } from "react-router-dom"

export const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center p-4 fixed z-10 w-full bg-white text-sm">
      <ul className="flex items-center gap-4">
        <li className="font-bold text-lg">
          <NavLink to="/">
            Shopy
          </NavLink>
        </li>
        <li>
          <NavLink to="/all" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>All</NavLink>
        </li>
        <li>
          <NavLink to="/clothes" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/furnitures" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Furnitures</NavLink>
        </li>
        <li>
          <NavLink to="/toys" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Toys</NavLink>
        </li>
        <li>
          <NavLink to="/others" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Others</NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        <li className="text-black/60">
          camilo@tech.com
        </li>
        <li>
          <NavLink to="/my-orders" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>My Account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/fornitures" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>🛒0</NavLink>
        </li>
      </ul>
    </nav>
  )
}
