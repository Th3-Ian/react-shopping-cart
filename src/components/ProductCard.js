import React from 'react';
import { useState } from 'react';

function ProductCard(props) {
	const [quantity, setQuantity] = useState(0);
	const [hover, setHover] = useState(false);

	const decreaseQuant = () => {
		setQuantity(quantity - 1);
	}
	const increaseQuant = () => {
		setQuantity(quantity + 1);
	}
	const handleHover =() => {setHover(hover => !hover)};


  return (
		<div className='card-container' onMouseEnter={handleHover} onMouseLeave={handleHover}>
			<div>
				<img src={props.img} alt={props.name} />
				<div className={`card-desc ${hover ? null : 'hidden-transition'}`}>
					{props.description}
				</div>
			</div>
			<div>
				<div>{props.name}</div>
				<div>{props.price}</div>
			</div>
			{<div>
				<button className='decrease-btn' onClick={decreaseQuant}>-</button>
				<input type="text" placeholder='0' value={quantity} />
				<button className='increase-btn' onClick={increaseQuant}>+</button>
			</div>}
			<div>
				<button>Add To Cart</button>
			</div>

		</div>
	);
}

export default ProductCard;
