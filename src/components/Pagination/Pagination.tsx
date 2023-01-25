import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import { useMilkContext } from '../../context/MilkContext'

import './Pagination.css'

const Pagination = () => {
  const {
    milks,
    getMilksPage,
  } = useMilkContext();

  const handleNextPage = () => {
    getMilksPage('2','9')
  }

  return (
    <section className="pagination">
      {milks.previous ? 
        <button className="pagination--square next--prev">
          <span className="pagination--square__char"><MdArrowBackIosNew /></span>
        </button> 
      : 
        <button className="pagination--square next--prev disable" disabled>
          <span className="pagination--square__char"><MdArrowBackIosNew /></span>
        </button>
      }
      <div className="pagination--square page">
        <span className="pagination--square__char">1</span>
      </div>
      <div>
        of
      </div>
      <div className="pagination--square page">
        <span className="pagination--square__char">11</span>
      </div>
      <button className="pagination--square next--prev" onClick={() => handleNextPage() }>
        <span className="pagination--square__char"><MdArrowForwardIos /></span>
      </button>
    </section>
  )
}

export default Pagination