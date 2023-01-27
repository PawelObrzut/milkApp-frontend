import { useMilkContext } from '../../context/MilkContext';
import Nav from '../../components/Nav/Nav';
import MilkStore from '../../components/MilkStore/MilkStore';
import Pagination from '../../components/Pagination/Pagination';
import './LandingPage.css';

const LandingPage = () => {
  const {
    milks,
  } = useMilkContext();

  return (
    <main className="main">
      <Nav />
      <h5 className="main--products__count">{milks.count} products</h5>
      <MilkStore />
      <Pagination />
    </main>
  );
};

export default LandingPage;
