import { useMilkContext } from '../../context/MilkContext';
import './NavFilterDropItem.css';

const NavFilterDropItem = ({ type }: { type: string }) => {
  const {
    setFilter,
    filter,
  } = useMilkContext();

  const setFilterTypes = () => {
    const milkTypeIndex = filter.indexOf(type);
    if (milkTypeIndex === -1) {
      setFilter(current => [...current, type]);
      return;
    }
    setFilter(current => current.filter(milkType => milkType !== type));
  };

  return (
    <li>
      <label>
        <input onChange={setFilterTypes} type="checkbox" />
        {type}
      </label>
    </li>
  );
};

export default NavFilterDropItem;
