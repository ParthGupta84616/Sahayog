import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import speech from "../assets/speech.jpg"; // Import the image
import rep from "../assets/report.webp"; // Import the image

const RippleBackground = () => {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes ripple {
        0% { transform: scale(0.8); }
        50% { transform: scale(1.2); }
        100% { transform: scale(0.8); }
      }

      @keyframes gradientAnimation {
        0% { background-position: 0% 0%; }
        50% { background-position: 100% 100%; }
        100% { background-position: 0% 0%; }
      }

      @keyframes moveParticles {
        0% { transform: translate(0, 0); }
        100% { transform: translate(calc(100vw - 50px), calc(100vh - 50px)); }
      }

      .animated-gradient {
        background: linear-gradient(90deg, #120521 ,#001310, #002d72);
        background-size: 400% 400%;
        animation: gradientAnimation 14s ease infinite;
      }

      .moving-particle {
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        animation: moveParticles 14s linear infinite;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => document.head.removeChild(styleSheet);
  }, []);

  const circleStyle = {
    position: "absolute",
    borderRadius: "50%",
    background: "#ccc",
    animation: "ripple 16s infinite",
    boxShadow: "0px 0px 1px 0px #50ff8fb9",
  };

  const sizes = {
    small: {
      width: "150px",
      height: "150px",
      left: "-75px",
      bottom: "-75px",
    },
    medium: {
      width: "300px",
      height: "300px",
      left: "-150px",
      bottom: "-150px",
    },
    large: {
      width: "450px",
      height: "450px",
      left: "-225px",
      bottom: "-225px",
    },
    xlarge: {
      width: "600px",
      height: "600px",
      left: "-300px",
      bottom: "-300px",
    },
    xxlarge: {
      width: "750px",
      height: "750px",
      left: "-375px",
      bottom: "-375px",
    },
  };

  const opacities = {
    shade1: { opacity: 0.1 },
    shade2: { opacity: 0.3 },
    shade3: { opacity: 0.5 },
    shade4: { opacity: 0.7 },
    shade5: { opacity: 0.9 },
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden animated-gradient">
      {/* Particles */}
      <div className="moving-particle" style={{ top: "50%", left: "70%" }} />
      <div className="moving-particle" style={{ top: "10%", left: "20%" }} />
      <div className="moving-particle" style={{ top: "80%", left: "30%" }} />
      <div className="moving-particle" style={{ top: "50%", left: "70%" }} />
      <div className="moving-particle" style={{ top: "20%", left: "60%" }} />
      <div className="moving-particle" style={{ top: "40%", left: "10%" }} />
      <div className="moving-particle" style={{ top: "50%", left: "70%" }} />
      <div className="moving-particle" style={{ top: "70%", left: "80%" }} />
      <div className="moving-particle" style={{ top: "20%", left: "60%" }} />
      <div className="moving-particle" style={{ top: "90%", left: "40%" }} />

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="lg:w-1/2 mb-4 md:mb-0 text-center md:text-center translate-x-28  translate-y-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Welcome to{" "}
              <span className="bg-gradient-to-r text-4xl md:text-5xl from-yellow-800 to-orange-400 text-transparent bg-clip-text">
                SAHAYOG
              </span>
            </h2>
            <div className="flex flex-row justify-center items-center">
              <p className="text-base md:text-xl py-2 mb-4 lg:mr-4">
                "Streamline Speech Therapy with Sahayog: Automated, AI-Driven
                Clinical Workflow for Enhanced Patient Care."
              </p>
            </div>
            <Link
              to="/login"
              className="bg-[#dd2aa7] text-base md:text-lg flex-row items-center font-semibold py-3 px-6 rounded-xl hover:bg-[#e048b3] text-white"
            >
              Get Started
            </Link>
          </div>
          <div className="relative w-full h-80 md:h-[400px] lg:h-[500px] xl:h-[650px] flex flex-col justify-end items-end">
            <img
              src={rep}
              alt="An illustrative depiction of speech therapy"
              className="w-full rounded-bl-[100%] lg:rounded-bl-[100%] translate-x-40"
            />
          </div>
        </div>
      </div>

      {/* Ripple Effect */}
      <div
        style={{ ...circleStyle, ...sizes.xxlarge, ...opacities.shade1 }}
        className="absolute"
      />
      <div
        style={{ ...circleStyle, ...sizes.xlarge, ...opacities.shade2 }}
        className="absolute"
      />
      <div
        style={{ ...circleStyle, ...sizes.large, ...opacities.shade3 }}
        className="absolute"
      />
      <div
        style={{ ...circleStyle, ...sizes.medium, ...opacities.shade4 }}
        className="absolute"
      />
      <div
        style={{ ...circleStyle, ...sizes.small, ...opacities.shade5 }}
        className="absolute"
      />
    </div>
  );
};

export default RippleBackground;
