import React from "react"
import footerLogo from "../../assets/Logo.png"
import Banner from "../../assets/banner/banner-footer.jpg"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa"

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
        <div
          data-aos="zoom-in"
          className="grid md:grid-cols-3 pb-32 pt-16"
          dir="rtl"
        >
          {/* company details */}
          <div className="py-8">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-right text-justify mb-3 flex items-center gap-3 font-custom1">
              <img src={footerLogo} alt="" className="max-w-[70px]" />
              فروشگاه حقیقت لامپ
            </h1>
            <p className="text-justify">
              فروشگاه حقیقت لامپ در زمینه فروش انواع لوازم روشنایی به
              فروشگاه‌های معتبر تبدیل شده است.
            </p>
          </div>
          {/* Footer Links details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pr-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-right text-justify mb-3">
                  لینک های مهم
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-right text-justify mb-3">
                  لینک
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>ایران، خوزستان، شوشتر</p>
                </div>
                <div className="flex items-center gap-3 mt-3" dir="rtl">
                  <FaMobileAlt />
                  <p>09379502568</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
