import { Route, Routes } from "react-router-dom"
import RootLayout from "./components/global/rootLayout"
import HomePage from "./pages/HomePage"
import ProductDetails from "./pages/ProductDetail"
import CartPage from "./pages/CartPage"
import Checkout from "./pages/Checkout"
import FavoritePage from "./pages/FavoritePage"
import NotFound from "./pages/NotFound"
import Compare from "./pages/Compare"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ProductsPage from "./pages/ProductsPage"
import SearchPage from "./pages/SearchPage"
import ShopPage from "./pages/ShopPage"

function App() {
  return <>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/compare" element={<Compare />} />   
        <Route path="/shop" element={<ShopPage />} />   
      </Route>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
}

export default App
