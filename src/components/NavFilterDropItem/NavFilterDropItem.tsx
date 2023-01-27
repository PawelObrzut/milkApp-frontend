import { useMilkContext } from '../../context/MilkContext';
import './NavFilterDropItem.css';

const NavFilterDropItem = ({ type }: { type: string }) => {
  const {
    setFilter,
    filter,
  } = useMilkContext();

  const setFilterTypes = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        {/* { filter.includes(type)
          ? <input value={type} type="checkbox" onChange={setFilterTypes} checked />
          : <input value={type} type="checkbox" onChange={setFilterTypes} />
        } */}
        <input value={type} type="checkbox" onChange={setFilterTypes} />
          {type}
      </label>
    </li>
  );
};

export default NavFilterDropItem;
