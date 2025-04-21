import "./App.css";
import backgroundImage from "./assets/images/background-pic.jpg";
import GreetingDetailsPage from "./pages/greetingdetails/GreetingDetails";

function App() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <GreetingDetailsPage />
    </div>
  );
}

export default App;
