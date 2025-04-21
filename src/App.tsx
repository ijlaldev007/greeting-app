import "./App.css";
import backgroundImage from "./assets/images/background-pic.jpg";
import GreetingLocation from "./pages/greetinglocation/GreetingLocation";

function App() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <Input type="text" placeholder="Date of Birth" label="Full Name" /> */}
      <GreetingLocation />
    </div>
  );
}

export default App;
