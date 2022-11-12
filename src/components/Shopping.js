import React from 'react';
import { useState } from 'react';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ProductCard from './ProductCard';
import ProductPlaceholder from '../Assets/product-placeholder.png';

function Shopping({ cart, setCart }) {
	const [aside, setAside] = useState(false)
	let hiddenCheck = aside ? null : 'hidden';
	let hideIcon = aside ? 'hidden' : null;

	function handleClick() {
		setAside(aisde => !aside)
	}



  return (
    <div className='shop-container'>
			<aside className={aside ? null : 'closed-aside' } id='asideShop' onClick={aside ? null : handleClick}>
				<div onClick={aside ? handleClick : null}>
					<div className={hideIcon}>
					<ViewHeadlineIcon fontSize='large' />{" "}
					</div>
				</div>
				<h3 className={`aside-header ${hiddenCheck}`}>Categories</h3>
				<ul className={`shop-categories ${hiddenCheck}`}>
					<li>Chronograph</li>
					<li>Dive</li>
					<li>Dress</li>
					<li>GMT</li>
					<li>Pilot</li>
				</ul>
			</aside>
			<div>
				<h1>SHOP</h1>
				{<ProductCard name={'Watch 1'} price={'$198'} description={'Amazing watch'} type={'dive'} img={ProductPlaceholder} setCart={setCart} cart={cart} />}
			</div>

    </div>
  );
}

export default Shopping;
