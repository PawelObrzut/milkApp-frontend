import milkImage from '../../images/milk.png'
import './MilkStoreItem.css'
import { InterfaceMilk } from '../../types'

const MilkStoreItem = ({ name, type, storage, id}: InterfaceMilk) => {
  return (
    <article key={id} className="milkStore--milk">
      <img className="milkStore--milk__image" src={milkImage} alt="milkey" />
      <div className="milkStore--milk__text">
        <h5>{name}</h5>
        <p>{type} <span>{storage} liter</span></p> 
      </div>
    </article>
  )
}

export default MilkStoreItem