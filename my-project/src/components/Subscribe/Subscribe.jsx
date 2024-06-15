import React from "react"
import Banner from "../../assets/banner/banner.jpg"

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      style={BannerImg}
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
    >
      <div className="container backdrop-blur-sm py-10" dir="rtl">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-4xl sm:text-right font-semibold ">
            منتظر خبرهای خوب باشید
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="ایمیل خو را وارد کنید"
            className="w-full p-3 rounded-sm focus:text-black"
          />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
