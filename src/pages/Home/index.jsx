import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

export const Home = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search a Product" 
        className="w-380 p-4 mb-4 rounded-lg border-2 focus:outline-none"
        onChange={event => context.setSearch(event.target.value)}/>
      <div className="grid grid-cols-4 w-full max-w-screen-lg">
      {
        context.items?.map(item => (
          <Card data={item} key={item.id} />
        ))
      }
      </div>
      <ProductDetail />
    </Layout>
  )
}