import React from 'react';
import Placeholder from '../Assets/placeholder.png'
import { Link } from 'react-router-dom';

function CTA() {
  return <div className='cta-container'>
		<Link to='/shop' >
		<img src={Placeholder} alt="Shop Newest Swiss Watches" className='cta-home-img' />
		<div className='cta-home-msg'>NEWEST SWISS MADE WATCHES</div>
		<button className='cta-btn'>SHOP NOW</button>
		</Link>
	</div>;
}

export default CTA;
