import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import homehero from "../assets/homehero.jpg"; // Import the image

const WelcomeSection = () => {
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
        100% { transform: translate(calc(100vw), calc(100vh)); }
      }

      .animated-gradient {
        background: linear-gradient(135deg, #036969, #012320, #001411, #002a64, #441040);
        background-size: 400% 400%;
        animation: gradientAnimation 20s ease infinite;
        height: 100vh; /* Fixed height for the gradient */
      }

      .moving-particle {
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        animation: moveParticles  linear infinite;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => document.head.removeChild(styleSheet);
  }, []);

  const circleStyle = {
    position: "absolute",
    borderRadius: "50%",
    background: "#ccc",
    animation: "ripple 11s infinite",
    boxShadow:
      "0px 0px 1px 0px #5ff8fb9, 5px -5px 15px 0px #066969, 0px 0px 25px 5px rgba(6, 105, 105, 0.5)", // Added depth effect
  };

  const sizes = {
    small: { width: "150px", height: "150px", left: "-75px", bottom: "-75px" },
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

  // Randomize number of particles (between 10 and 30)
  const particleCount = Math.floor(Math.random() * 21) + 10;

  return (
    <div className="relative w-full h-screen overflow-hidden animated-gradient">
      {[...Array(particleCount)].map((_, index) => {
        const animationDuration = Math.random() * 10 + 10; // Random duration between 10s and 20s
        return (
          <div
            key={index}
            className="moving-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${animationDuration}s`,
            }}
          />
        );
      })}
      {/* Content */}
      <div className="relative h-screen ">
        <div className="flex flex-col h-screen lg:flex-row items-center ">
          <div className="relative w-full lg:h-full md:h-1/2 px-8 md:px-16 py-10 lg:w-1/2 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
              Welcome to{" "}
              <span className="bg-gradient-to-r text-3xl sm:text-4xl md:text-5xl from-yellow-800 to-orange-400 text-transparent bg-clip-text">
                SAHAYOG
              </span>
            </h2>

            <div className="flex flex-row text-white justify-center items-center mb-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">
                "Streamline Speech Therapy with Sahayog: Automated, AI-Driven
                Clinical Workflow for Enhanced Patient Care."
              </p>
            </div>

            <Link
              to="/login"
              className="bg-gradient-to-r z-10 from-yellow-800 to-orange-400 text-md sm:text-md md:text-lg lg:text-xl font-semibold rounded-xl hover:bg-[#e048b3] text-white text-center px-4 py-2 mt-4"
            >
              Get Started
            </Link>
          </div>
          <div className="lg:h-full w-full lg:w-1/2 md:h-1/2">
            <div className="flex flex-col items-center justify-center h-full lg:flex-row lg:items-start lg:justify-end md:flex-row md:items-center md:justify-end pt-20 lg:p-0">
              <img
                src={homehero}
                alt="An illustrative depiction of speech therapy"
                className="opacity-90 w-[70%] shadow-black shadow-lg sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[600px] aspect-square rounded-[36px] sm:rounded-[36px] md:rounded-tl-[80%] md:rounded-br-none md:rounded-bl-none md:rounded-tr-none lg:rounded-tl-none lg:rounded-br-none lg:rounded-bl-[85%] lg:rounded-tr-none"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Ripple Effect (only on medium and large screens) */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full">
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
    </div>
  );
};

export default WelcomeSection;
