import React from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Link } from 'react-router-dom';

function Nav() {
	const linkStyle = {color: 'white'};
  return (
		<nav>
			<div className='logo-header'>HORLOGES</div>
			<ul className='nav-links'>

				<Link style={linkStyle} to="/" >
				<li>Home</li>
				</Link>


				<Link style={linkStyle}  to="/shop" >
				<li>Shop</li>
				</Link>

				<li>
					<Badge color="primary" badgeContent='0'>
						<ShoppingCartIcon />{" "}
					</Badge></li>
			</ul>
		</nav>
	);
}

export default Nav;
