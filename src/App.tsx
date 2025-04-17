import "./App.css";
import backgroundImage from "./assets/images/background-pic.jpg";
import SplashScreen from "./pages/splash/SplashScreen";
import Video from "./components/vedio/index";

function App() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <SplashScreen /> */}
      <Video
        videoUrl="https://youtube.com/shorts/1Zcvyft5-dQ?si=ryW0HGFSrGMnq__R" // Example YouTube Shorts URL
        title="Sample YouTube Shorts Video"
      />
    </div>
  );
}

export default App;
