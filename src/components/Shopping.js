import React from 'react';
import { useState } from 'react';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';

function Shopping() {
	const [aside, setAside] = useState(false)
	let hiddenCheck = aside ? null : 'hidden';
	let hideIcon = aside ? 'hidden' : null;

	function handleClick() {
		setAside(aisde => !aside)
	}

  return (
    <div className='shop-container'>
			<aside className={aside ? null : 'closed-aside' } id='asideShop' onClick={handleClick}>
				<div className={hideIcon}>
					<ViewHeadlineIcon fontSize='large' />{" "}
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
			</div>

    </div>
  );
}

export default Shopping;
