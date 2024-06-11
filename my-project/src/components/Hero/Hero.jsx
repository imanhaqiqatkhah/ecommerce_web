import React from "react"
import Image1 from "../../assets/hero/flyingo.png"
import Image2 from "../../assets/hero/aircraft.png"
import Image3 from "../../assets/hero/travel.png"

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all people Ticket",
    description:
      "Flying on an airplane for the first time — or the first time in a long while — can be an exciting, life-changing adventure. But it can also be incredibly stressful.",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 30% off on all people Ticket",
    description:
      "You want to head for the gate with the swagger of a seasoned traveler, but that's hard to pull off when you don't know how much it costs to check a bag, or what to expect when you go through airport security.",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 70% off on all people Ticket",
    description:
      "It’s easy to overpack — but if you do, it could cost you. Before your flight, visit your airline’s website to review luggage size and weight restrictions, as well as baggage fees.",
  },
]

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
                Fly (Order Flyingo)
              </h1>
              <p className="text-sm">
                any of a large number of insects characterized by the use of
                only one pair of wings for flight and the reduction of the
                second pair of wings to knobs used for balance.
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="order-1 sm:order-2">
              <div className="relative z-10">
                <img
                  src={Image1}
                  alt=""
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
