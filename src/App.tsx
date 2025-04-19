import "./App.css";
import backgroundImage from "./assets/images/background-pic.jpg";
import SignUp from "./pages/signup/SignUp";
function App() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SignUp />
    </div>
  );
}

export default App;
