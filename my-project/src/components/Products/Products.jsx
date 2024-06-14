import React from "react"
import Img1 from "../../assets/women/women.jpg"
import Img2 from "../../assets/women/women2.jpg"
import Img3 from "../../assets/women/women3.jpg"
import Img4 from "../../assets/women/women4.jpg"
import Img5 from "../../assets/women/women5.jpg"
import { FaStar } from "react-icons/fa6"

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "چراغ ماشین",
    rating: 5.0,
    color: "انواع برند ها",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "آرم ماشین",
    rating: 4.5,
    color: "انواع آرم ها",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "جا کلیدی",
    rating: 4.4,
    color: "انواع رنگ ها",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "لامپ داخلی ماشین",
    rating: 4.0,
    color: "انواع رنگ ها",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "دوخت فرمان",
    rating: 4.5,
    color: "انواع رنگ ها",
    aosDelay: "800",
  },
]

const Products = () => {
  return (
    <div className="mt-14 mb-12 ">
      <div className="container">{/* Header Section */}</div>
      <div className="mb-10 text-center max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary ">
          بیشترین فروش محصولات
        </p>
        <h1 data-aos="fade-up" className="text-4xl font-bold font-custom1">
          محصولات
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400 text-balance">
          <span className="font-bold text-gray-500">فروشگاه حقیقت لامپ </span>
          به عنوان یکی از جدیدترین فروشگاه ها در زمینه فروش انواع لوازم روشنایی
          و جانبی خودرو و همچنین لوازم یدکی از سال 1394 نزدیک یک دهه تجربه، با
          پایبندی به سه اصل، پشتیبانی متعهد، گارانتی محصول و تضمین اصل‌بودن کالا
          موفق شده، در ضمینه فروش انواع هدلایت خودرو ، لوازم جانبی و یدکی خودرو
          به فروشگاه‌های معتبر تبدیل شود
        </p>
      </div>
      <div>
        {/* Body Section */}
        <div>
          <div
            className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5"
            dir="rtl"
          >
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
                  <div className="flex items-center justify-center gap-1">
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
