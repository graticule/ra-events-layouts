import PropTypes from 'prop-types';

export default function ShopItem({item}) {
  return (
    <div className="item">
      <img className='item__image' src={item.img}/>
      <div className='item__title'>{item.name}</div>
      <div className='item__color'>{item.color}</div>
      <div className='item__price'>${item.price}</div>
      <button className='button'>add to cart</button>
    </div>
  )
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};