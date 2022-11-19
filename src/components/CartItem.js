import React from 'react';
import ProductPlaceholder from '../Assets/product-placeholder.png';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState, useEffect } from 'react';

function CartItem({ item, updateCart, removeItem }) {
  const [quant, setQuant] = useState(1);

  const decreaseQuant = () => {
    setQuant(quant > 0 ? quant - 1 : null);
    updateCart(item, quant);
  };
  const increaseQuant = () => {
    setQuant(quant + 1);
    updateCart(item, quant);
  };

  return (
    <Card elevation={3}>
      <CardMedia
        style={{ height: 160 }}
        image={item.img ? item.img : ProductPlaceholder}
        title={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h6'>
          {item.name}
        </Typography>
        <DeleteIcon onClick={removeItem(item)} />
        <Box display='flex' justifyContent='space-between' my={2}>
          <Typography gutterBottom variant='subtitle2'>
            QTY
            <button className='decrease-btn' onClick={decreaseQuant}>
              -
            </button>
            {item.quantity}
            <button className='increase-btn' onClick={increaseQuant}>
              +
            </button>
          </Typography>
          <Typography gutterBottom variant='subtitle2'>
            $ {item.price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CartItem;
