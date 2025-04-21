import "./App.css";
import backgroundImage from "./assets/images/background-pic.jpg";

function App() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
}

export default App;
