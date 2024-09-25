import { Route, Routes } from "react-router-dom"
import RootLayout from "./components/global/rootLayout"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"

function App() {
  return <>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Route>
    </Routes>
  </>
}

export default App
