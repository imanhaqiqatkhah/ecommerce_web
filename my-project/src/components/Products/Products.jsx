import React from "react"
import Img1 from "../../assets/women/women.png"
import Img2 from "../../assets/women/women2.png"
import Img3 from "../../assets/women/women3.png"
import Img4 from "../../assets/women/women4.png"
import Img5 from "../../assets/women/women5.png"
import { FaStar } from "react-icons/fa6"

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Full T-Shirt",
    rating: 4.0,
    color: "brown",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
]

const Products = () => {
  return (
    <div className="mt-14 mb-12 ">
      <div className="container">{/* Header Section */}</div>
      <div className="mb-10 text-center max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary ">
          Top Selling Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400 ">
          Airplane wings are shaped to make air move faster over the top of the
          wing. When air moves faster, the pressure of the air decreases
        </p>
      </div>
      <div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                key={data.id}
                className="space-y-3"
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
