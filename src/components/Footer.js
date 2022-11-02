import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-logo'>HORLOGES</div>
			<ul className='nav-links footer-links'>
				<Link to="/" >
					<li>Home</li>
				</Link>
				<Link to="/shop" >
				<li>Shop</li>
				</Link>
			</ul>
			<div className='footer-copyright'>Copyright 2022</div>
		</footer>
	)
}

export default Footer