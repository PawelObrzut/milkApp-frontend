import './Nav.css'
import { BsSearch } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { useMilkContext } from '../../context/MilkContext'

const Nav = () => {
  const {
    isOpen,
    setIsOpen
  } = useMilkContext();

  return (
    <nav className="nav">
      <div className="nav--search">
        <BsSearch className="nav--search__icon"/>
        <input className="nav--search__input" type="text" placeholder="Search"></input>
      </div>

      <div className="nav--filter"> 
        <p className="nav--filter__title" onClick={() => setIsOpen(!isOpen)}>Filter</p>
        
      { isOpen && <ul className="nav--filter__dropdown active">
        <p className="nav--filter__close"onClick={() => setIsOpen(!isOpen)}><MdClose /></p>
        <p className="nav--filter__category">Milk type</p>
          <li>
            <label>
              <input type="checkbox" />
              Whole Milk
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Oat Milk
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Almond Milk
            </label>
          </li>
        </ul> }

      </div>


    </nav>
  )
}

export default Nav