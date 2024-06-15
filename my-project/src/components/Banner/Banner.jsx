import React from "react"
import BannerImg from "../../assets/banner/banner.png"
import { GrSecure } from "react-icons/gr"
import { IoFastFood } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"

const BannerBanner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* text details section */}
          <div dir="rtl" className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold font-custom1"
            >
              بهترین ها را از ما بخواهید
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide text-justify leading-5"
            >
              فروشگاه حقیقت لامپ به عنوان یکی از جدیدترین فروشگاه ها در زمینه
              فروش انواع لوازم روشنایی و جانبی خودرو و همچنین لوازم یدکی از سال
              1394 نزدیک یک دهه تجربه، با پایبندی به سه اصل، پشتیبانی متعهد،
              گارانتی محصول و تضمین اصل‌بودن کالا موفق شده، در ضمینه فروش انواع
              هدلایت خودرو ، لوازم جانبی و یدکی خودرو به فروشگاه‌های معتبر تبدیل
              شود
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 " />
                <p>کیفیت محصولات</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>ارسال به سراسر کشور</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>پرداخت آسان</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>سفارش آسان</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerBanner
