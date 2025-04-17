import "./App.css";
import backgroundImage from "./assets/images/background-pic.jpg";

import SplashScreen from "./pages/splash/SplashScreen";

function App() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SplashScreen />
    </div>
  );
}

export default App;
