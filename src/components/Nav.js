import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav({ cart, cartTotal, open }) {
  const [visibility, setVisibility] = useState(false);
  const linkStyle = { color: 'white' };

  return (
    <nav>
      <div className='logo-header'>HORLOGES</div>
      <ul className='nav-links'>
        <Link style={linkStyle} to='/'>
          <li>Home</li>
        </Link>

        <Link style={linkStyle} to='/shop'>
          <li>Shop</li>
        </Link>

        <li>
          <Button onClick={open}>
            <Badge color='primary' badgeContent={cartTotal}>
              <ShoppingCartIcon />{' '}
            </Badge>
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
