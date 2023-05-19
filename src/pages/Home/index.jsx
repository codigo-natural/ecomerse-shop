import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

export const Home = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      Home
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