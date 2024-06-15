import React from "react"
import Slider from "react-slick"

const TestimonialData = [
  {
    id: 1,
    name: "ایمان",
    text: "عالی، محصولاتتون عالین، من که خیلی خیلی راضیم",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "اکرم",
    text: "عالی، عجب سایت خفن و خوشگلی، به همه آرزوهات میرسی، مطمئنم",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "اقدس",
    text: "من میخوام سرمایه گذاری کنم روی کسب و کارتون، به واتساپ پیام دادم، مرسی",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "امین",
    text: "داداش گلم، همیشه پاینده باشی",
    img: "https://picsum.photos/104/104",
  },
]

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow:2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10 text-center max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary ">
            نظرات و کامنت های مشتری های ما
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold font-custom1">
            نظرات
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 text-balance">
            <span className="font-bold text-gray-500">فروشگاه حقیقت لامپ </span>
            به عنوان یکی از جدیدترین فروشگاه ها در زمینه فروش انواع لوازم
            روشنایی و جانبی خودرو و همچنین لوازم یدکی از سال 1394 نزدیک یک دهه
            تجربه، با پایبندی به سه اصل، پشتیبانی متعهد، گارانتی محصول و تضمین
            اصل‌بودن کالا موفق شده، در ضمینه فروش انواع هدلایت خودرو ، لوازم
            جانبی و یدکی خودرو به فروشگاه‌های معتبر تبدیل شود
          </p>
        </div>
        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4" dir="rtl">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light font-custom1">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-custom1 absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
