import React from "react"
import Img1 from "../../assets/toprated/toprated1.png"
import Img2 from "../../assets/toprated/toprated2.png"
import Img3 from "../../assets/toprated/toprated3.png"
import { FaStar } from "react-icons/fa"

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "چراغ ماشین",
    description:
      "در فروشگاه ما، چراغ‌های ماشین شما را با نوری تازه و درخشان مجهز می‌کنیم. مجموعه‌ای بی‌نظیر از چراغ‌های با کیفیت و مدرن، تجربه رانندگی شما را به اوج می‌رساند. با چراغ‌های ما، جاده‌ها همیشه روشن و امن خواهند بود. به ما بپیوندید و نوری نو به مسیرهای خود بیاورید؛ جایی که کیفیت و رضایت مشتریان اولویت اصلی است",
  },
  {
    id: 2,
    img: Img2,
    title: "لامپ هدلایت",
    description:
      "در فروشگاه ما، لامپ‌های هدلایت ماشین با نوری درخشان و با کیفیت، جاده‌های تاریک را روشن می‌کنند. این لامپ‌ها با تکنولوژی پیشرفته و طراحی مدرن، نه تنها ایمنی رانندگی شما را افزایش می‌دهند، بلکه به خودروی شما جلوه‌ای زیبا و جذاب می‌بخشند. با انتخاب لامپ‌های هدلایت از ما، تجربه‌ای متفاوت و مطمئن از رانندگی در شب را به دست آورید. بیایید و نوری نو به مسیرهای خود ببخشید",
  },
  {
    id: 3,
    img: Img3,
    title: "دوخت فرمان",
    description:
      "در فروشگاه ما، دوخت فرمان چرم ماشین با دقت و مهارت انجام می‌شود تا به خودروی شما جلوه‌ای لوکس و منحصر به فرد ببخشد. با استفاده از بهترین چرم‌ها و طراحی‌های زیبا، فرمان خودروی شما را به اثری هنری تبدیل می‌کنیم. احساس نرمی و راحتی در دستان شما، همراه با دوام و استحکام بالا، تجربه‌ای لذت‌بخش از رانندگی را به ارمغان می‌آورد. به ما اعتماد کنید و زیبایی و کیفیت را همزمان تجربه کنید",
  },
]

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className="text-right mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            بیشترین امتیازات محصولات
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold font-custom1">
            محصولات
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 text-balance">
            <span className="font-bold text-gray-500">فروشگاه حقیقت لامپ </span>
            به فروشگاه ما بیایید و تفاوت را تجربه کنید؛ جایی که کیفیت، قیمت و
            رضایت مشتریان همواره در اولویت قرار دارد. اینجا، مسیرهای تاریک روشن
            و امن‌تر می‌شوند و رانندگی به لذت تبدیل می‌شود
          </p>
        </div>

        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              dir="rtl"
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-yellow-600 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md "
                />
              </div>

              {/* details section */}
              <div className="p-4 text-center ">
                {/* start rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500 " />
                  <FaStar className="text-yellow-500 " />
                  <FaStar className="text-yellow-500 " />
                  <FaStar className="text-yellow-500 " />
                  <FaStar className="text-yellow-500 " />
                </div>
                <h1 className="text-xl font-bold dark:text-white">
                  {data.title}
                </h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 dark:text-gray-300 ">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  // onClick={handleOrderPopup}
                >
                  سفارش آنلاین
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts
