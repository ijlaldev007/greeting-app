import Video from "../../components/video/Video"; // Adjust path if needed
import Button from "../../components/button/Button"; // Adjust path if needed

const OnBoardingVideoScreen = () => {
  return (
    <div className="flex flex-col  px-4  sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Centered Video */}
      <div className="flex justify-center">
        <Video title="How Greeting App Works" />
      </div>

      {/* Bottom Buttons */}
      <div className="mt-8 flex flex-col items-center space-y-4 w-full max-w-sm mx-auto md:max-w-md">
        <Button
          text="Next"
          onClick={() => console.log("Next Clicked")}
          bgColor="#C90082"
          textColor="#FFFFFF"
        />
        <Button
          text="Skip"
          onClick={() => console.log("Skip Clicked")}
          bgColor="#FFFFFF"
          textColor="#C90082"
        />
      </div>
    </div>
  );
};

export default OnBoardingVideoScreen;
