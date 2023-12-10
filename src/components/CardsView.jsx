import PropTypes from 'prop-types';
import ShopCard from "./ShopCard";

export default function CardsView({cards}) {
  return (
    <div className="cards-view">
    { cards.map((card, i) => (
      <ShopCard key={i} card={card} />
    ))}
    </div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
};