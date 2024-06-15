import React from "react"
import App from "../../App"
import Image1 from "../../assets/hero/flyingo.png"
import Image2 from "../../assets/hero/aircraft.png"
import Image3 from "../../assets/hero/travel.png"
import Slider from "react-slick"
import { CiTextAlignRight } from "react-icons/ci"

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "لامپ هدلایت",
    description:
      "لامپ هدلایت خودرو معمولاً با نور سفید و روشنی بالا طراحی می‌شوند، لامپ هدلایت خودرو یکی از اجزای مهم و اساسی در سیستم روشنایی خودرو است. این لامپ‌ها به منظور پوشش نیازهای رانندگی در شب و در شرایط نور کم طراحی شده‌اند، طبق سلیقه خود می توانید آن را انتخاب و برای خرید سفارش دهید",
  },
  {
    id: 2,
    img: Image2,
    title: "دوخت چرم فرمان(کاملا تخصصی)",
    description:
      "دور فرمان دوختی چرم طبیعی یکی از بهترین محصولاتی است که در ادامه با ویژگی های آن آشنا می شوید، چرم تمام سوزنی است که در عین سادگی به زیبایی و جذابیت فرمان می افزاید، رنگ بندی این محصول، متنوع است که طبق سلیقه خود می توانید آن را انتخاب و برای خرید سفارش دهید",
  },
  {
    id: 3,
    img: Image3,
    title: "چراغ خودرو",
    description:
      "چراغ جلو خودرو یکی از اجزای بسیار مهم سیستم روشنایی ماشین‌‌ها ‌می‌باشد، علاوه بر کارایی و وظیفه ای که در استایل یک ماشین دارد، تاثیر بسیار زیادی بر روی زیبایی ظاهری ماشین‌‌ها نیز خواهد داشت، طبق سلیقه خود می توانید آن را انتخاب و برای خرید سفارش دهید",
  },
]

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  }
  return (
    <div className="relative overflow-hidden min-h-[425px] sm:min-h-[500px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-2 sm:pb-0" dir="rtl">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-8 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    className="text-3xl sm:text-3xl lg:text-4xl font-bold py-2 text-right font-custom1"
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {data.title}
                  </h1>
                  <p
                    className="text-sm text-right"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      سفارش
                    </button>
                  </div>
                </div>
                {/* Image section */}
                <div className="order-1 sm:order-2">
                  <div
                    className="relative z-10"
                    data-aos="zoom-in"
                    data-aos-once="true"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] lg:scale-120 sm:h-[400px] sm:w-[400px] sm:scale-110 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
