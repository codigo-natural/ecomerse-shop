import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SignIn } from '../SignIn'
import { NotFound } from '../NotFound'
import './App.css'

export const App = () => {
  return (
    <>
      <h1 className='bg-green-500'>ecomerse shop</h1>
      <Home />
      <MyAccount />
      <MyOrders />
      <SignIn />
      <NotFound />
      <MyOrder />
    </>
  )
}
