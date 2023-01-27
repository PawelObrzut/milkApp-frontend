import './Nav.css';
import NavSearch from '../NavSearch/NavSearch';
import NavFilter from '../NavFilter/NavFilter';

const Nav = () => (
    <nav className="nav">
      <NavSearch />
      <NavFilter />
    </nav>
);

export default Nav;
