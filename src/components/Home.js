import React from 'react';
import CTA from './CTA'

function Home() {
  return <div>
		<CTA />
		<div className='home-about'>
			<h1>Our Company</h1>
			<p>
				Horloges started in The Hague, NL by a team of ambitious entrepreneurs to
				bring the beauty and style of Swiss watches to world the at an affordable price.
				The team worked diligently with Swiss watch makers to create stunning timepieces
				that were reliable without the pricetag commonly associated with the excellence of
				Swiss watches. From developing the product to now working diligently to offer these
				watches to the world first starting in the European Union, branching our to the United
				Kingdom, and North America. Now we are proud to say our watches can be found everywhere
				from Kyoto, Japan and Seoul, South Korea to Buenos Aries, Argentina.
				</p>
		</div>
	</div>;
}

export default Home;
