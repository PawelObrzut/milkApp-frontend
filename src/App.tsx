import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MilkProvider } from './context/MilkContext';
import PageTitle from './components/PageTitle/PageTitle';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
      <MilkProvider>
        <PageTitle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </MilkProvider>
    </div>
  );
}

export default App;
