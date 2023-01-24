import './Nav.css'
import { BsSearch } from 'react-icons/bs'

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav--search">
        <BsSearch className="nav--search__icon"/>
        <input className="nav--search__input" type="text" placeholder="Search"></input>
      </div>
    </nav>
  )
}

export default Nav