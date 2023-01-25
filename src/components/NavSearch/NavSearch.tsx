import { BsSearch } from 'react-icons/bs'
import './NavSearch.css'

const NavSearch = () => {
  return (
    <section className="nav--search">
      <BsSearch className="nav--search__icon"/>
      <input className="nav--search__input" type="text" placeholder="Search"></input>
    </section>
  )
}

export default NavSearch