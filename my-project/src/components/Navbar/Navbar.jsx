// eslint-disable-next-line no-unused-vars
import React from "react"
import Logo from "../../assets/Logo.png"
import { IoMdSearch } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6"
import { FaCaretDown } from "react-icons/fa"
import DarkMode from "./DarkMode"

const Menu = [
  {
    id: 1,
    name: "خانه",
    link: "/#",
  },
  {
    id: 2,
    name: "فروش ویژه",
    link: "/services",
  },
  {
    id: 3,
    name: "خرید هدلایت",
    link: "/#",
  },
  {
    id: 3,
    name: "دوخت فرمان چرم",
    link: "/#",
  },
  {
    id: 3,
    name: "رزرو نوبت تنظیم چراغ",
    link: "/#",
  },
]

const DropDownLinks = [
  { id: 1, name: "شبکه اجتماعی", link: "/#" },
  { id: 2, name: "وبلاگ من", link: "/#" },
  // {
  //   id: 3,
  //   name: "وبلاگ من",
  //   link: "/#",
  // },
]

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div
      dir="rtl"
      className="shadow-md bg-white dark:bg-gray-900 dark:text-white relative duration-200"
    >
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className=" uppercase font-bold text-2xl sm:text-3xl flex gap-2 font-custom1"
            >
              <img src={Logo} alt="Logo" className="w-24" />
              فروشگاه حقیقت لامپ
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="جستجو"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="absolute text-gray-500 group-hover:text-primary top-1/2 -translate-y-1/2 left-3" />
            </div>
            <button
              onClick={() => handleOrderPopup()}
              className=" bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* DarkMode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>

          {/* order button */}
        </div>
      </div>

      {/* lower navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li
              key={data.id}
              className="inline-block px-4 hover:text-primary duration-200"
            >
              <a href={data.link}>{data.name}</a>
            </li>
          ))}
          {/* { Simple Dropdown and links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 ">
              تماس با ما
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md shadow-md bg-white p-2 text-black">
              <ul>
                {DropDownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
