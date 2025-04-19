import "./App.css";
import backgroundImage from "./assets/images/background-pic.jpg";
import OnboardingScreen from "./pages/onboarding/OnBoardingVideoScreen";
function App() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <OnboardingScreen />
    </div>
  );
}

export default App;
