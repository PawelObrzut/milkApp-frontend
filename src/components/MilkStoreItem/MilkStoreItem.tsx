import { Link } from 'react-router-dom';
import milkImage from '../../images/milk.png';
import './MilkStoreItem.css';
import { InterfaceMilk } from '../../types';
import { useMilkContext } from '../../context/MilkContext';

const MilkStoreItem = ({
  name, type, storage, id,
}: InterfaceMilk) => {
  const {
    setMilk,
  } = useMilkContext();

  const passTheState = () => {
    setMilk({
      name,
      type,
      storage,
      id,
    });
  };

  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }} onClick={passTheState}>
      <article key={id} className="milkStore--milk">
        <img className="milkStore--milk__image" src={milkImage} alt="milkey" />
        <div className="milkStore--milk__text">
          <h5>{name}</h5>
          <p>{type} <span>{storage} liter</span></p>
        </div>
      </article>
    </Link>
  );
};

export default MilkStoreItem;
