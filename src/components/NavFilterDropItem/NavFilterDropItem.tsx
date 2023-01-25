import './NavFilterDropItem.css'

const NavFilterDropItem = ({ milkType }: { milkType: string }) => {
  return (
    <li>
      <label>
        <input type="checkbox" />
          {milkType}
      </label>
    </li>
  )
}

export default NavFilterDropItem