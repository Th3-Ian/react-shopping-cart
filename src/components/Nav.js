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
				<li>
				<Link style={linkStyle} to="/" >
					Home
				</Link>
				</li>
				<li>
				<Link style={linkStyle}  to="/shop" >
					Shop
				</Link>
				</li>
				<li>
					<Badge color="primary" badgeContent='0'>
						<ShoppingCartIcon />{" "}
					</Badge></li>
			</ul>
		</nav>
	);
}

export default Nav;
