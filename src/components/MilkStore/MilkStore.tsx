import './MilkStore.css'
import milk from '../../images/milk.png'

const MilkStore = () => {
  return (
    <section className="milkStore">
      <article className="milkStore--milk">
        <img className="milkStore--milk__image" src={milk} alt="milk" />
        <div className="milkStore--milk__text">
          <h5>Jessalyn's  nice almond milk</h5>
          <p>Almond milk <span>44 liter</span></p> 
        </div>
      </article>


    </section>
  )
}

export default MilkStore