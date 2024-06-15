import React from "react"
import Slider from "react-slick"

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, quaerat exercitationem. Iure iusto odit, provident amet nobis, optio dolore accusantium et reprehenderit quod eos exercitationem eaque excepturi mollitia quaerat ex?",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, quaerat exercitationem. Iure iusto odit, provident amet nobis, optio dolore accusantium et reprehenderit quod eos exercitationem eaque excepturi mollitia quaerat ex?",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, quaerat exercitationem. Iure iusto odit, provident amet nobis, optio dolore accusantium et reprehenderit quod eos exercitationem eaque excepturi mollitia quaerat ex?",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, quaerat exercitationem. Iure iusto odit, provident amet nobis, optio dolore accusantium et reprehenderit quod eos exercitationem eaque excepturi mollitia quaerat ex?",
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
        breakpoint: 1000,
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
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl"
              >
                <div>
                  <img
                    src={data.img}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
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
