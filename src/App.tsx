import './App.css';
import { Routes, Route } from 'react-router-dom';
import PageTitle from './components/PageTitle/PageTitle';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
      <PageTitle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
