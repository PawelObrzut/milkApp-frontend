import { useMilkContext } from '../../context/MilkContext';
import Nav from '../../components/Nav/Nav';
import MilkStore from '../../components/MilkStore/MilkStore';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';
import './LandingPage.css';

const LandingPage = () => {
  const {
    milks,
    loadingSpinner,
  } = useMilkContext();

  return (
    <main className="main">
      <Nav />
      <h5 className="main--products__count">{milks.count} products</h5>
      { loadingSpinner && <Loader /> }
      <MilkStore />
      <Pagination />
    </main>
  );
};

export default LandingPage;
