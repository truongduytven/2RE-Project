import { Route, Routes } from "react-router-dom"
import RootLayout from "./components/global/rootLayout"
import HomePage from "./pages/HomePage"
import ProductDetails from "./pages/ProductDetail/ProductDetail"
import ShopPage from "./pages/ShopPage"
import CartPage from "./pages/CartPage"

function App() {
  return <>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Route>
    </Routes>
  </>
}

export default App
