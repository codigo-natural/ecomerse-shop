import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div onClick={() => context.closeCheckoutSideMenu()} className='cursor-pointer'>
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>
    </aside>
  )
}
