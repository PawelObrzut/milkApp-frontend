import { useState } from 'react';
import { useMilkContext } from '../../context/MilkContext';
import './NavFilterDropItem.css';

const NavFilterDropItem = ({ type }: { type: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  const {
    setFilter,
    filter,
  } = useMilkContext();

  const setFilterTypes = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(() => !isChecked);
    const milkTypeIndex = filter.indexOf(event.target.value);
    if (milkTypeIndex === -1) {
      setFilter(current => [...current, event.target.value]);
      return;
    }
    setFilter(current => current.filter(milkType => milkType !== event.target.value));
  };

  return (
    <li>
      <label>
        <input value={type} type="checkbox" onChange={setFilterTypes} checked={isChecked}/>
        {type}
      </label>
    </li>
  );
};

export default NavFilterDropItem;
