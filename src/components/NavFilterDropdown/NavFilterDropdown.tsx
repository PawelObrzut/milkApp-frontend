import { useMilkContext } from '../../context/MilkContext';
import './NavFilterDropdown.css'
import NavFilterDropItem from '../NavFilterDropItem/NavFilterDropItem';

const NavFilterDropdown = () => {
  const {
    allMilksData
  } = useMilkContext();

  return (
    <ul className="nav--filter__dropdown active">
      {allMilksData.result.map(milk => (
        <NavFilterDropItem key={milk.id} milkType={milk.type} />
      ))}
    </ul>
  )
}

export default NavFilterDropdown