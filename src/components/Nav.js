import React from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

function Nav() {
  return (
		<nav className='sticky'>
			<div className='logo-header'>HORLOGES</div>
			<ul className='nav-links'>
				<li>Home</li>
				<li>Shop</li>
				<li>
					<Badge color="primary" badgeContent='0'>
						<ShoppingCartIcon />{" "}
					</Badge></li>
			</ul>
		</nav>
	);
}

export default Nav;
