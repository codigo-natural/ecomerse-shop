import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"

export const Home = () => {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])
  return (
    <Layout>
      Home
      <div className="grid grid-cols-4 w-full max-w-screen-lg">
      {
        items?.map(item => (
          <Card data={item} key={item.id} />
        ))
      }
      </div>
      <ProductDetail />
    </Layout>
  )
}