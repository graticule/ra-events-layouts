import PropTypes from 'prop-types';
import ShopItem from "./ShopItem";

export default function ListView(props) {
  const { items } = props;
  return (
    <div className='list'>
    { items.map((item, i) => {
      return <ShopItem key={i} item={item} />
    }
    ) }
    </div>
  )
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
};