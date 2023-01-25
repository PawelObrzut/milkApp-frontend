import { useMilkContext } from '../../context/MilkContext';
import './NavFilter.css'
import NavFilterDropdown from '../NavFilterDropdown/NavFilterDropdown';

const NavFilter = () => {
  const {
    isOpen,
    setIsOpen
  } = useMilkContext();
  
  return (
    <section className="nav--filter"> 
      <p className="nav--filter__title" onClick={() => setIsOpen(!isOpen)}>Filter</p>
      {isOpen && <NavFilterDropdown />}
    </section>
  )
}

export default NavFilter