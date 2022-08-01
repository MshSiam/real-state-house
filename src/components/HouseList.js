import React, { useContext } from "react"
import { HouseContext } from "./HouseContext"
import { Link } from "react-router-dom"
import House from "./House"
import { ImSpinner2 } from "react-icons/im"

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext)
  // console.log(houses)

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    )
  }

  if (houses.length < 1) {
    return (
      <div className="text-center mt-[200px] text-red-600">
        Sorry, Nothing Was Found !!
      </div>
    )
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-14 ">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`}>
                <House house={house} key={index} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HouseList
