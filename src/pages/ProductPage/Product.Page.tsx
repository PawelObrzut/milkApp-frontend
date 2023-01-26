import { useNavigate, useParams } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import './ProductPage.css'

const ProductPage = () => {
  const {id} = useParams()
  const navigate = useNavigate();

  return (
    <main className="main">
      <section className="main--milk">
        <button className="main--button__back" onClick={() => navigate(-1)}>
          <span className="main--button__icon"><MdArrowBackIosNew /> </span>
          Back
          </button>
        <p>Your are looking at milk : {id}</p>
        
      </section>
    </main>
  )
}

export default ProductPage