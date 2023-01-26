import { useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import milkImage from '../../images/milk.png'

import './ProductPage.css'
import { useMilkContext } from '../../context/MilkContext'

const ProductPage = () => {
  const navigate = useNavigate();
  const {
    milk
  } = useMilkContext();
  
  return (
    <main className="main">
      <div className="main--button">
        <button className="main--button__back" onClick={() => navigate(-1)}>
          <span className="main--button__icon"><MdArrowBackIosNew /> </span>
          Back
        </button>
      </div>

      <section className="main--milk">
        <div className="main--milk__image">
          <img src={milkImage} alt="milk"/>
        </div>
        <div className="main--milk__text">
          <h5>{milk.name}</h5>
          <p>{milk.type}</p>
          <p className="storage">{milk.storage} liter </p>
          {/* <div className="milk--quantity__slider">
            <input type="range" min="1" max="100" value="50" className="slider" />
          </div> */}
          <button className="milk--button__order">Order</button>
        </div>
      </section>
    </main>
  )
}

export default ProductPage