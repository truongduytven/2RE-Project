import { Route, Routes } from "react-router-dom"
import RootLayout from "./components/global/rootLayout"
import HomePage from "./pages/HomePage"
import ProductDetails from "./pages/ProductDetail"
import ShopPage from "./pages/ShopPage"
import CartPage from "./pages/CartPage"
import Checkout from "./pages/Checkout"
import FavoritePage from "./pages/FavoritePage"
import NotFound from "./pages/NotFound"

function App() {
  return <>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
}

export default App
