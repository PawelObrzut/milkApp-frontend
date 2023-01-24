import './Nav.css'
import { BsSearch } from 'react-icons/bs'

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav--search">
        <BsSearch className="nav--search__icon"/>
        <input className="nav--search__input" type="text" placeholder="Search"></input>
      </div>

      <div className="nav--filter"> 
        <p className="nav--filter__title">Filter</p>
        <ul className="nav--filter__dropdown active">
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
        </ul>
      </div>


    </nav>
  )
}

export default Nav