import { useMilkContext } from '../../context/MilkContext';
import './NavFilterDropdown.css'
import NavFilterDropItem from '../NavFilterDropItem/NavFilterDropItem';

const NavFilterDropdown = () => {
  const {
    milkTypes
  } = useMilkContext();

  return (
    <ul className="nav--filter__dropdown active">
      {milkTypes.map(type => (
        <NavFilterDropItem key={type} type={type} />
      ))}
    </ul>
  )
}

export default NavFilterDropdown