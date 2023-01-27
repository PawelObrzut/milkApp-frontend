import './MilkStore.css';
import MilkStoreItem from '../MilkStoreItem/MilkStoreItem';
import { useMilkContext } from '../../context/MilkContext';

const MilkStore = () => {
  const {
    milks,
  } = useMilkContext();

  return (
    <section className="milkStore">
      {milks.result?.map(milk => (
        <MilkStoreItem
          key={`${milk.id}unique`}
          id={milk.id}
          name={milk.name}
          storage={milk.storage}
          type={milk.type} />
      ))}
    </section>
  );
};

export default MilkStore;
