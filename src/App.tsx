import { Route, Routes } from "react-router-dom"
import RootLayout from "./components/global/rootLayout"
import HomePage from "./pages/HomePage"

function App() {
  return <>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  </>
}

export default App
