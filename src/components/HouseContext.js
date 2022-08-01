import React, { createContext, useEffect, useState } from "react"
import { housesData } from "../data"

// creating context

export const HouseContext = createContext()
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState("Location (any)")
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState("Property type (any)")
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState("Price range (any)")
  const [loading, setLoading] = useState(false)

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country
    })
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)]
    setCountries(uniqueCountries)
  }, [])

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type
    })
    const uniqueProperties = ["Type (any)", ...new Set(allProperties)]
    setProperties(uniqueProperties)
  }, [])

  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <HouseContext.Provider
      value={{
        countries,
        country,
        setCountries,
        houses,
        setHouses,
        setCountry,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        loading,
        setLoading,
        handleClick
      }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider
