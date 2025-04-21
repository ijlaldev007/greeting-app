import GreetingSelection from "../../components/greetingselection/GreetingSelection";
import Button from "../../components/button/Button";
import { greetings } from "../../constants/greetings"; // or import { relations } from "../../constants/relations"

export default function GreetingDetailsPage() {
  const handleSelectGreeting = (id: number) => {
    console.log("Selected Greeting ID:", id);
  };

  return (
    <div className="w-full sm:w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-around px-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        What do you want to congratulate with?
      </h1>

      {/* Greeting Selection Component */}
      <div className="w-full h-[440px] md:h-[600px] lg:h-[520px]">
        <GreetingSelection
          options={greetings} // You can replace this with 'relations'
          defaultSelectedId={4} // Optional: Default to "Merry Christmas"
          onSelect={handleSelectGreeting}
        />
      </div>

      {/* Next Button */}
      <div className="w-full max-w-md">
        <Button
          text="Next"
          onClick={() => console.log("Next clicked")}
          bgColor="#C90082"
          textColor="#FFFFFF"
          className="w-full py-3 rounded-full text-base font-semibold mb-[25px]"
        />
      </div>
    </div>
  );
}
