import './App.css';
import backgroundImage from './assets/images/background-pic.jpg';
import VideoScroller from './components/videoscroller/VideoScroller';
// Commented out unused imports
// import Input from './components/input/TextInput';
// import SenderDetail from './pages/senderdetail/SenderDetail';

function App() {
  return (
    <div
      className='relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden p-4'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <Input type="text" placeholder="Date of Birth" label="Full Name" /> */}
      <VideoScroller containerHeight={600} />
      {/* <SenderDetail /> */}
    </div>
  );
}

export default App;
