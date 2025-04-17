import backgroundImage from "../../assets/images/background-pic.jpg";
import logo from "../../assets/images/logo.png";

const SplashScreen = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <img
        src={logo}
        alt="Logo"
        className="transition-all duration-500 ease-in-out max-w-[140%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[50%] object-contain"
      />
    </div>
  );
};

export default SplashScreen;
