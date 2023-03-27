import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useMilkContext } from '../../context/MilkContext';
import './NavSearch.css';

const NavSearch = () => {
  const input = useRef() as React.MutableRefObject<HTMLInputElement>;
  const {
    getMilkByName,
  } = useMilkContext();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const searchName = input.current?.value;
      input.current.value = '';
      getMilkByName(searchName);
    }
  };

  return (
    <section className="nav--search">
      <BsSearch className="nav--search__icon"/>
      <input className="nav--search__input" type="text" placeholder="Search" ref={input} onKeyDown={handleKeyDown}></input>
    </section>
  );
};

export default NavSearch;
