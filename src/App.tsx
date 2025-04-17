import './App.css';
import backgroundImage from './assets/images/background-pic.jpg';

import GreetingSelection from './components/greetingselection/GreetingSelection';

function App() {
  return (
    <div
      className='relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden p-4'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <GreetingSelection />
    </div>
  );
}

export default App;
