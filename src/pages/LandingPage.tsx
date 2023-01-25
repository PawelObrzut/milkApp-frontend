import { useMilkContext } from '../context/MilkContext';
import Nav from '../components/Nav/Nav'
import MilkStore from '../components/MilkStore/MilkStore';
import './LandingPage.css'

const LandingPage = () => {
  const {
    allMilksData
  } = useMilkContext();
  
  return (
    <main className="main">
      <Nav />
      <h5 className="main--products__count">{allMilksData.count} products</h5>
      <MilkStore />
    </main>
  )
}

export default LandingPage