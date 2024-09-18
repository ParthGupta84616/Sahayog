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

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700, // Transition speed (in milliseconds)
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Auto-slide interval (in milliseconds)
  arrows: true,

  appendDots: (dots) => (
    <div
      style={{
        position: "absolute",
        bottom: "-40px",
        width: "100%",
        textAlign: "center",
        bgcolor: "#066969",
      }}
    >
      <ul className="flex justify-center space-x-2">{dots}</ul>
    </div>
  ),
};

const Testimonials = () => {
  return (
    <section className=" py-12 bg-gray-100 relative">
      <div className="container mx-auto px-12 py-12 bg-gray-100 relative">
        <h2 className="text-4xl  font-bold text-center text-[#066969] mb-12">
          WHAT OUR USERS SAY
        </h2>
        <hr className="my-6 mx-auto w-full border-1 border-[#066969]" />

        <div className="relative">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-2  shadow-lg bg-[#6fa093] rounded-[120px] border-2 border-[#066969] my-2 text-center flex flex-col items-center"
              >
                <div className="mb-6 flex justify-center w-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-28 h-28 rounded-full border-4 border-blue-300 object-cover"
                  />
                </div>
                <div className="mb-6 text-gray-800">
                  <FaQuoteLeft className="text-4xl text-[#066969] inline-block mb-4" />
                  <p className="text-lg leading-relaxed text-white">
                    {testimonial.text}
                  </p>
                </div>
                <h3 className="text-2xl font-semibold text-[#066969]">
                  {testimonial.name}
                </h3>
                <p className="text-base text-gray-800">{testimonial.role}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
