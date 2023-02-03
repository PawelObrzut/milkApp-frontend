import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useMilkContext } from '../../context/MilkContext';
import './NavSearch.css';

const NavSearch = () => {
  const input = useRef() as React.MutableRefObject<HTMLInputElement>;
  const {
    setMilks,
  } = useMilkContext();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const searchName = input.current?.value;
      input.current.value = '';
      fetch(`https://milkapp-api.onrender.com/api/milk/${searchName}`, { method: 'GET' })
        .then(respond => respond.json())
        .then(data => setMilks(data));
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
