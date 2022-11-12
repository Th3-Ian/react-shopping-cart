import React from 'react';
import { useState } from 'react';

function ProductCard({ name, price, description, type, img, setCart, cart }) {
  const [quantity, setQuantity] = useState(0);
  const [hover, setHover] = useState(false);
  const prodObj = {
    name: name,
    desc: description,
    type: type,
    img: img,
    price: price,
    quantity: quantity
  };

  const decreaseQuant = () => {
    setQuantity(quantity > 0 ? quantity - 1 : null);
  };
  const increaseQuant = () => {
    setQuantity(quantity + 1);
  };
  const handleHover = () => {
    setHover((hover) => !hover);
  };

  const updateCart = () => {
    if (cart.some((x) => x.name === prodObj.name)) {
      const newState = cart.map((x) => {
        if (x.name === prodObj.name) {
          return { ...x, quantity: x.quantity + quantity };
        }
        return x;
      });
      setCart(newState);
    } else {
      setCart((cart) => [...cart, prodObj]);
    }
  };

  return (
    <div
      className='card-container'
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div>
        <img src={img} alt={name} />
        <div className={`card-desc ${hover ? null : 'hidden-transition'}`}>
          {description}
        </div>
      </div>
      <div className='card-info'>
        <div>{name}</div>
        <div>{price}</div>
      </div>
      <div className='card-btn-container'>
        {
          <div>
            <button className='decrease-btn' onClick={decreaseQuant}>
              -
            </button>
            <input type='text' placeholder='0' value={quantity} />
            <button className='increase-btn' onClick={increaseQuant}>
              +
            </button>
          </div>
        }
        <div>
          <button onClick={quantity > 0 ? updateCart : null}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
