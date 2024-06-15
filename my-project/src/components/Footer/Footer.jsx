import React from "react"
import footerLogo from "../../assets/Logo.png"
import Banner from "../../assets/banner/banner-footer.jpg"

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
]

const Footer = () => {
  return (
    <div className="text-white mb-20" style={BannerImg}>
      <div className="container">
        <div className="grid md:grid-cols-3 pv-44 pt-5" dir="rtl">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-right text-justify mb-3 flex items-center gap-3 font-custom1">
              <img src={footerLogo} alt="" className="max-w-[70px]" />
              فروشگاه حقیقت لامپ
            </h1>
            <p className="text-justify">
              فروشگاه حقیقت لامپ در زمینه فروش انواع لوازم روشنایی و جانبی
              خودرو، با سه اصل، پشتیبانی متعهد، گارانتی محصول و تضمین اصل‌بودن
              کالا به فروشگاه‌های معتبر تبدیل شده است.
            </p>
          </div>
          {/* Footer Links details */}
        </div>
      </div>
    </div>
  )
}

export default Footer
