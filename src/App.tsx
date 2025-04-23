// React Router imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import backgroundImage from './assets/images/background-pic.jpg';

// Page Components
import NotFound from './pages/notfound/NotFound';
import SplashScreen from './pages/splash/SplashScreen';
import OnBoardingVideoScreen from './pages/onboarding/OnBoardingVideoScreen';
import SignUp from './pages/signup/SignUp';
import SenderDetail from './pages/senderdetail/SenderDetail';
import GreetingLocation from './pages/greetinglocation/GreetingLocation';
import GreetingDetails from './pages/greetingdetails/GreetingDetails';
import GreetingSubtype from './pages/greetingsubtype/GreetingSubtype';
import GreetingReceiving from './pages/greetingreceiving/GreetingReceiving';
import TextPreview from './pages/textpreview/TextPreview';
import GreetingDone from './pages/greetingdone/GreetingDone';
import GreetingSummary from './pages/greetingsummary/GreetingSummary';

// Demo Components
import VideoScroller from './components/videoscroller/VideoScroller';

// Error Handling
import ErrorBoundary from './components/error/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toast.css'; // Custom toast styling

// Context
import { GreetingProvider } from './context/GreetingContext';

function App() {
  return (
    <ErrorBoundary>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        limit={1} // Limit to only one toast at a time
      />
      <GreetingProvider>
        <Router>
          <div
            className='relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col overflow-hidden'
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {/* Main Content */}
            <div className='flex-1 flex flex-col items-center justify-center p-4'>
              <Routes>
                {/* Main Application Flow */}
                <Route path='/' element={<Navigate to='/splash' />} />
                <Route path='/splash' element={<SplashScreen />} />
                <Route path='/onboarding' element={<OnBoardingVideoScreen />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/sender-details' element={<SenderDetail />} />
                <Route
                  path='/greeting-location'
                  element={<GreetingLocation />}
                />
                <Route path='/greeting-details' element={<GreetingDetails />} />
                <Route path='/greeting-subtype' element={<GreetingSubtype />} />
                <Route
                  path='/greeting-receiving'
                  element={<GreetingReceiving />}
                />
                <Route path='/text-preview' element={<TextPreview />} />
                <Route path='/greeting-done' element={<GreetingDone />} />
                <Route path='/greeting-summary' element={<GreetingSummary />} />

                {/* Demo Routes */}
                <Route
                  path='/demo/video-scroller'
                  element={<VideoScroller containerHeight={80} />}
                />

                {/* Fallback route */}
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </GreetingProvider>
    </ErrorBoundary>
  );
}

export default App;
