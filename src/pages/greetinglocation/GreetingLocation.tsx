import Button from "../../components/button/Button";
import VideoComponent from "../../components/videoscroller/VideoScroller"; // Replace with your actual video component

export default function GreetingLocationPage() {
  return (
    <div className="w-full sm:w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-evenly px-4">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center leading-tight mb-4">
        Choose the <br className="sm:hidden" />
        greeting location
      </h1>

      {/* Video Component */}
      <VideoComponent />

      {/* Next Button */}
      <div className="w-full max-w-md mt-6">
        <Button
          text="Next"
          onClick={() => console.log("Next clicked")}
          bgColor="#C90082"
          textColor="#FFFFFF"
          className="w-full py-3 rounded-full text-base font-semibold"
        />
      </div>
    </div>
  );
}
