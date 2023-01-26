import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import { useMilkContext } from '../../context/MilkContext'

import './Pagination.css'

const Pagination = () => {
  const {
    milks,
    filter,
    getMilksPage,
  } = useMilkContext();

  const next:string | undefined = milks.next?.toString()
  const previous: string | undefined = milks.previous?.toString()

  const handleNextPage = () => {
    getMilksPage(next, filter)
  }

  const handlePreviousPage = () => {
    getMilksPage(previous, filter)
  }

  return (
    <section className="pagination">
      {milks.previous ? 
        <button className="pagination--square next--prev" onClick={handlePreviousPage}>
          <span className="pagination--square__char"><MdArrowBackIosNew /></span>
        </button> 
      : 
        <button className="pagination--square next--prev disabled" disabled>
          <span className="pagination--square__char"><MdArrowBackIosNew /></span>
        </button>
      }
      
      <div className="pagination--square page">
        <span className="pagination--square__char">{milks.page ? milks.page : '--'}</span>
      </div>

      <div className="pagination--square__of">
        of
      </div>

      <div className="pagination--square page">
        <span className="pagination--square__char">{milks.count && milks.limit ? Math.ceil(milks.count/milks.limit) : '--'}</span>
      </div>

      {milks.next ? 
        <button className="pagination--square next--prev" onClick={handleNextPage}>
          <span className="pagination--square__char"><MdArrowForwardIos /></span>
        </button>
        :
      <button className="pagination--square next--prev disabled" disabled>
        <span className="pagination--square__char"><MdArrowForwardIos /></span>
      </button>
      }
      
    </section>
  )
}

export default Pagination