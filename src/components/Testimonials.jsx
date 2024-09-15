import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial data
const testimonials = [
  {
    name: "Dr. Priya Desai",
    role: "Speech Therapist",
    text: "This platform has remarkably streamlined my workflow and greatly improved my ability to deliver personalized care to my patients. Highly recommended!",
    image: "https://picsum.photos/200?random=1",
  },
  {
    name: "Rajesh Kumar",
    role: "Patient",
    text: "I’ve experienced significant progress in my speech therapy sessions thanks to the advanced tools and real-time support offered by this platform.",
    image: "https://picsum.photos/200?random=2",
  },
  {
    name: "Dr. Anil Gupta",
    role: "Speech Therapist",
    text: "The platform’s innovative features have greatly enhanced my practice, making it easier to monitor progress and tailor therapy to each patient’s needs.",
    image: "https://picsum.photos/200?random=3",
  },
  {
    name: "Sneha Reddy",
    role: "Patient",
    text: "Thanks to this platform, I’ve seen remarkable improvements in my communication skills. The real-time feedback has been incredibly beneficial.",
    image: "https://picsum.photos/200?random=4",
  },
];

// Custom Arrow Components
const Arrow = ({ className, style, onClick, direction }) => (
  <div
    className={`${className} ${
      direction === "left" ? "left-2" : "right-2"
    } absolute top-1/2 -translate-y-1/2 z-10 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer`}
    style={style}
    onClick={onClick}
  >
    {direction === "left" ? "<" : ">"}
  </div>
);

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  prevArrow: <Arrow direction="left" />,
  nextArrow: <Arrow direction="right" />,
  appendDots: (dots) => (
    <div
      style={{
        position: "absolute",
        bottom: "-30px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <ul className="flex justify-center space-x-2">{dots}</ul>
    </div>
  ),
};

const Testimonials = () => {
  return (
    <section className="px-12 py-12 bg-gray-100 relative">
      <div className="container mx-auto px-12 py-12 bg-gray-100 relative">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
          What Our Users Say
        </h2>
        <div className="relative">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-2 shadow-lg rounded-lg border border-blue-200 text-center flex flex-col items-center"
              >
                <div className="mb-6 flex justify-center w-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-28 h-28 rounded-full border-4 border-blue-300 object-cover"
                  />
                </div>
                <div className="mb-6 text-gray-800">
                  <FaQuoteLeft className="text-4xl text-blue-500 inline-block mb-4" />
                  <p className="text-lg leading-relaxed text-gray-700">
                    {testimonial.text}
                  </p>
                </div>
                <h3 className="text-2xl font-semibold text-blue-900">
                  {testimonial.name}
                </h3>
                <p className="text-base text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
