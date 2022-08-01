import React from "react"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import PropertyDetails from "./pages/PropertyDetails"

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/property/:id"
          element={<PropertyDetails></PropertyDetails>}
        />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
