import { MdClose } from 'react-icons/md';
import { useMilkContext } from '../../context/MilkContext';
import './NavFilter.css';
import NavFilterDropdown from '../NavFilterDropdown/NavFilterDropdown';

const NavFilter = () => {
  const {
    isOpen,
    setIsOpen,
  } = useMilkContext();

  return (
    <section className="nav--filter">
      {!isOpen
        ? <p className="filter--title__closed" onClick={() => setIsOpen(!isOpen)}>Filter</p>
        : <div className="nav--filter__open">
          <div className="nav--filter__sticky">
            <p className="filter--title__open">Filter<span className="nav--filter__close" onClick={() => setIsOpen(!isOpen)}><MdClose /></span></p>
            <p>Milk type</p>
          </div>
          <NavFilterDropdown />
        </div>
      }
    </section>
  );
};

export default NavFilter;
