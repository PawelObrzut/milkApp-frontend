import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'

import './Pagination.css'

const Pagination = () => {
  return (
    <section className="pagination">
      <div className="pagination--square next--prev">
        <span className="pagination--square__char"><MdArrowBackIosNew /></span>
      </div>
      <div className="pagination--square page">
        <span className="pagination--square__char">1</span>
      </div>
      <div className="pagination--of">
        of
      </div>
      <div className="pagination--square page">
        <span className="pagination--square__char">11</span>
      </div>
      <div className="pagination--square next--prev">
        <span className="pagination--square__char"><MdArrowForwardIos /></span>
      </div>
    </section>
  )
}

export default Pagination