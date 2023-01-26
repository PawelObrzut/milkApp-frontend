import { useMilkContext } from '../../context/MilkContext'
import './NavFilterDropItem.css'

const NavFilterDropItem = ({ milkType }: { milkType: string }) => {
  const {
    toFilterItems
  } = useMilkContext()
  
  const setFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const milkTypeIndex = toFilterItems.indexOf(event.target.value)
    if (milkTypeIndex === -1) {
      toFilterItems.push(event.target.value)
      return
    }
    toFilterItems.splice(milkTypeIndex, 1);
  }

  return (
    <li>
      <label>
        <input value={milkType} type="checkbox" onChange={setFilter} />
          {milkType}
      </label>
    </li>
  )
}

export default NavFilterDropItem