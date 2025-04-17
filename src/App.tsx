import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useState } from 'react';
import LogoScreen from './components/screens/logo-screen';
import OnboardingVideo from './components/screens/onboarding-video';
import GreetingSelection from './components/screens/greeting-selection';
import PreviewScreen from './components/screens/preview-screen';

function App() {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(() => {
    return localStorage.getItem('hasSeenOnboarding') === 'true';
  });

  const handleOnboardingComplete = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setHasSeenOnboarding(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <LogoScreen
              onTransitionEnd={() => {
                if (hasSeenOnboarding) {
                  return <Navigate to='/create-greeting' replace />;
                } else {
                  return <Navigate to='/onboarding' replace />;
                }
              }}
            />
          }
        />
        <Route
          path='/onboarding'
          element={
            hasSeenOnboarding ? (
              <Navigate to='/create-greeting' replace />
            ) : (
              <OnboardingVideo
                videoUrl='/onboarding-video.mp4'
                onComplete={handleOnboardingComplete}
                onSkip={handleOnboardingComplete}
              />
            )
          }
        />
        <Route path='/create-greeting' element={<GreetingSelection />} />
        <Route path='/preview' element={<PreviewScreen />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  );
}

export default App;
