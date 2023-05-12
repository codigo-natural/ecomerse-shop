import { useContext } from "react"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center p-4 top-0 fixed z-10 w-full bg-white text-sm">
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
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black" />
          <div>
            {context.count}
          </div>
        </li>
      </ul>
    </nav>
  )
}
