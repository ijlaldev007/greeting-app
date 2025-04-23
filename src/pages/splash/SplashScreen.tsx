import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGreeting } from "../../context/GreetingContext"; // 👈 import context
import logo from "../../assets/images/logo.png";
import "./SplashScreen.css";

const SplashScreen = () => {
  const navigate = useNavigate();
  const { resetData } = useGreeting(); // 👈 grab the reset function

  useEffect(() => {
    // 👇 Clear all greeting context state
    resetData();

    // Optional: clear browser storage if you're saving anything there
    sessionStorage.clear();
    localStorage.clear();

    // Redirect to onboarding after 3 seconds
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, resetData]);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={logo}
        alt="Logo"
        className="pulse-animation max-w-[140%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[50%] object-contain"
      />
    </div>
  );
};

export default SplashScreen;
