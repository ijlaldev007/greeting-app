import Greeting from "../../components/greetingselection/GreetingSelection"; // Adjust the import path
import Button from "../../components/button/Button"; // if using shadcn/ui or your own button

export default function GreetingDetailsPage() {
  return (
    <div className="w-full sm:w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-around px-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        What do you want to congratulate with?
      </h1>

      {/* Greeting Component */}
      <div className="w-full h-[440px] md:h-[600px] lg:h-[520px] ">
        <Greeting />
      </div>

      {/* Next Button */}
      <div className="w-full max-w-md">
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
