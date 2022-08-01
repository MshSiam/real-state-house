import React from "react"
import { housesData } from "../data"
import { BiBed, BiBath, BiArea } from "react-icons/bi"
import { Link, useParams } from "react-router-dom"

const PropertyDetails = () => {
  const { id } = useParams()
  // console.log(id)

  const house = housesData.find((house) => {
    return house.id === parseInt(id)
  })
  console.log(house)

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold ">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 mb:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 px-2 py-1 text-white rounded hover:bg-green-700 transition">
              {house.type}
            </div>
            <div className="bg-violet-500 px-2 py-1 text-white rounded hover:bg-violet-700 transition">
              {house.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-800">
            $ {house.price}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="" />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6 justify-between">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-purple-50 w-full mb-8 border border-gray-100 rounded-lg px-6 py-8 ">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" />
              </div>
              <div className="font-bold text-lg ">{house.agent.name}</div>
              <Link to="" className="text-violet-700 text-sm">
                View Listings
              </Link>
            </div>
            {/* form */}
            <form action="">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 mb-3 text-sm"
                type="text"
                name=""
                id=""
                placeholder="Name*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 mb-3 text-sm"
                type="email"
                name=""
                id=""
                placeholder="Email*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 mb-3 text-sm"
                type="number"
                name=""
                id=""
                placeholder="Number*"
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                placeholder="Message*"
                defaultValue="Hello I am Interested."></textarea>
              <div className="flex gap-x-2">
                <button className="bg-violet-500 hover:bg-violet-600 text-white rounded p-4 w-full transition my-2">
                  Send Message
                </button>
                <button className="border border-violet-500 hover:border-violet-800 hover:text-violet-800 rounded w-full p-4 my-2 transition">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails
