import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MilkProvider } from './context/MilkContext';
import PageTitle from './components/PageTitle/PageTitle';
import LandingPage from './pages/LandingPage/LandingPage';
import ProductPage from './pages/ProductPage/Product.Page';

function App() {
  return (
    <div>
      <MilkProvider>
        <PageTitle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:id" element={<ProductPage />} />
        </Routes>
      </MilkProvider>
    </div>
  );
}

export default App;
