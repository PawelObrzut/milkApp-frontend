import { useNavigate } from 'react-router-dom'
import { useMilkContext } from '../../context/MilkContext'
import './PageTitle.css'

const PageTitle = () => {
  const navigate = useNavigate()
  const {
    getMilksPage
  } = useMilkContext()

  const reloadLandingPage = () => {
    getMilksPage('1')
    navigate('/')
  }

  return (
    <header className="header">
      <h1 className="header--title" onClick={reloadLandingPage}>the milk store</h1>
    </header>
  )
}

export default PageTitle