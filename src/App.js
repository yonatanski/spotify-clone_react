import "./App.css"

import Home from "./components/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login/Login"

function App() {
  // <Home />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
