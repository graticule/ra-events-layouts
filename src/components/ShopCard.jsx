import PropTypes from 'prop-types';
export default function ShopCard({card}) {
  return (
    <div className="card">
      <img className="card__image" src={card.img} alt={card.name} />
      <div className="card__header">
        <div className="card__title">{card.name}</div>
        <div className='card__color'>{card.color}</div>
      </div>
      <div className="card__footer">
        <div className="card__price">${card.price}</div>
        <button className="button">add to cart</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  card: PropTypes.object.isRequired,
};