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
    // console.log(country, property, price)
    const isDefault = (str) => {
      return str.split(" ").includes("(any)")
    }
    // console.log(isDefault(country))
    const minPrice = parseInt(price.split(" ")[0])
    const maxPrice = parseInt(price.split(" ")[2])
    // console.log(minPrice, maxPrice)

    const newHouses = housesData.filter((house) => {
      setLoading(true)
      const housesPrice = parseInt(house.price)

      // if all the values are selected
      if (
        house.country === country &&
        house.type === property &&
        housesPrice >= minPrice &&
        housesPrice <= maxPrice
      ) {
        return house
      }

      // if all the values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house
      }

      // if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country
      }
      // if property is not default
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property
      }
      // if price is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housesPrice >= minPrice && housesPrice <= maxPrice) {
          return house
        }
      }
      // if country & property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property
      }
      // if country & price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housesPrice >= minPrice && housesPrice <= maxPrice) {
          return house.country === country
        }
      }
      // if property & price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housesPrice >= minPrice && housesPrice <= maxPrice) {
          return house.type === property
        }
      }
    })
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      )
    }, 1000)
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
        handleClick,
        loading
      }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider
