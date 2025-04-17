import logo from "../../assets/images/logo.png";

const SplashScreen = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={logo}
        alt="Logo"
        className="transition-all duration-500 ease-in-out max-w-[140%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[50%] object-contain"
      />
    </div>
  );
};

export default SplashScreen;
