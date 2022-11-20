import React from 'react';
import { Box, Button, Card, Grid, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CartItem from './CartItem';
import { useEffect } from 'react';

// use material UI cards to dynamically show cart objects
//add update quantity & delete funcionality

function Cart({ cart, setCart, openModal, open }) {
	if (!openModal) return null;

	const testCart = [
		{ name: 'watch test', type: 'dive', price: '499', quantity: 3 }
	]

	// useEffect(() => {
	// 	if (cart.some((x) => x.name === item.name)) {
  //     const newState = cart.map((x) => {
  //       if (x.name === item.name) {
  //         return { ...x, quantity: x.quantity + quant };
  //       }
  //       return x;
  //     });
  //     setCart(newState);
  //   } else { return }
	// }, [cart])


	const updateCart = (item, quant) => {
    if (cart.some((x) => x.name === item.name)) {
      const newState = cart.map((x) => {
        if (x.name === item.name) {
          return { ...x, quantity: x.quantity + quant };
        }
        return x;
      });
      setCart(newState);
    } else { return }
  };

	// const removeItem = (x) => {
	// 	const newCart = () => {
	// 		cart.filter((item) =>
	// 			item.name === x.name)
	// 	}
  //   setCart(newCart)
	// };

  return (
		<div className='modalBackground'>
			<div className='modalContainer'>
				<Box className='modalTitle'  >
					<Typography variant='h3'>Your Cart</Typography>
					<Button onClick={open}><CloseIcon fontSize='large' /></Button>
				</Box>
				<Grid container spacing={3}>
					{cart?.map((item, i) => (
						<Grid key={i} item xs={8}>
							<CartItem item={item} updateCart={updateCart} />
						</Grid>
					))}
					<Box>
						<Button>
							<Typography gutterBottom variant='h4'>
								CHECK OUT
							</Typography>
						</Button>
					</Box>
				</Grid>
			</div>
		</div>
	)
}

export default Cart;
