import React from 'react';
import { useState } from 'react';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { Grid } from '@material-ui/core';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';
import ProductCard from './ProductCard';
import ProductPlaceholder from '../Assets/product-placeholder.png';

function Shopping({ cart, setCart }) {
  const [aside, setAside] = useState(false);
  const [category, setCategory] = useState('all');
  let hiddenCheck = aside ? null : 'hidden';
  let hideIcon = aside ? 'hidden' : null;

  const products = [
    {
      name: 'Bravado BQ3-50-RB',
      price: '$595.00',
      description: 'Limited Edition',
      type: 'dive',
      img: ProductPlaceholder
    },
    {
      name: 'Carburetor CQ4-50',
      price: '$795.00',
      description: 'Limited Edition',
      type: 'dive',
      img: ProductPlaceholder
    },
    {
      name: 'Guardian GA1-50-RB',
      price: '$995.00',
      description: 'Swiss Automatic',
      type: 'dive',
      img: ProductPlaceholder
    },
    {
      name: 'Seagull 1963',
      price: '$350.00',
      description: 'Acrylic | Sapphire',
      type: 'chronograph',
      img: ProductPlaceholder
    },
    {
      name: 'Sinn 103 St Sa',
      price: '$1,695.00',
      description: 'Automatic Winding',
      type: 'chronograph',
      img: ProductPlaceholder
    },
    {
      name: 'Pioneer Mechanical Chrono',
      price: '$2,095.00',
      description: 'Mechanical | 40mm',
      type: 'chronograph',
      img: ProductPlaceholder
    },
    {
      name: 'Intra-Matic Auto',
      price: '$945.00',
      description: 'Automatic | 38mm',
      type: 'dress',
      img: ProductPlaceholder
    },
    {
      name: 'T-Classic Le Locle',
      price: '$575.00',
      description: 'Automatic SS | 39.5mm',
      type: 'dress',
      img: ProductPlaceholder
    },
    {
      name: '5 Sports SKX',
      price: '$475.00',
      description: 'Automatic w/ Manual Winding',
      type: 'gmt',
      img: ProductPlaceholder
    }
  ];

  function handleClick() {
    setAside((aisde) => !aside);
  }

  return (
    <div className='shop-container'>
      <aside
        className={aside ? null : 'closed-aside'}
        id='asideShop'
        onClick={aside ? null : handleClick}
      >
        <div onClick={aside ? handleClick : null}>
          <div>
            {aside === false ? (
              <ViewHeadlineIcon fontSize='large' />
            ) : (
              <TransitEnterexitIcon fontSize='large' />
            )}
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
      <div className='product-container'>
        <h1>SHOP</h1>
        <Grid container className='product-grid'>
          {products?.map((item, i) => (
            <Grid key={i} item>
              <ProductCard
                name={item.name}
                price={item.price}
                description={item.description}
                type={item.type}
                img={item.img}
                setCart={setCart}
                cart={cart}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Shopping;
