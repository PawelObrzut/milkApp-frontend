import { useMilkContext } from '../../context/MilkContext';
import { MdClose } from 'react-icons/md'
import './NavFilterDropdown.css'
import NavFilterDropItem from '../NavFilterDropItem/NavFilterDropItem';

const NavFilterDropdown = () => {
  const {
    isOpen,
    setIsOpen,
    allMilksData
  } = useMilkContext();

  return (
    <ul className="nav--filter__dropdown active">
      <span className="nav--filter__close" onClick={() => setIsOpen(!isOpen)}><MdClose /></span>
      <h5 className="nav--filter__category">Milk type</h5>
      {allMilksData.result.map(milk => (
        <NavFilterDropItem key={milk.id} milkType={milk.type} />
      ))}
    </ul>
  )
}

export default NavFilterDropdown