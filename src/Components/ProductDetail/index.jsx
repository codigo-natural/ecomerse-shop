import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  console.log('PRODUCT TO SHOW: ', context.productToShow)
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div onClick={() => context.closeProductDetail()} className='cursor-pointer'>
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow.images[0]}
          alt={context.productToShow.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-medium text-sm'>{context.productToShow.description}</span>
      </p>
    </aside>
  )
}