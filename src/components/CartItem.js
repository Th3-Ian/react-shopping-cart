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

function CartItem({ item, updateCart }) {
  const [quant, setQuant] = useState(0);

  const itemNum = item.quantity;

  useEffect(() => {
    setQuant(itemNum);
  }, []);

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
        style={{ height: 100 }}
        image={item.img ? item.img : ProductPlaceholder}
        title={item.name}
      />
      <CardContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center'
          }}
        >
          <Typography gutterBottom variant='h6'>
            {item.name}
          </Typography>
          <Button>
            <DeleteIcon />
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px'
          }}
        >
          <Typography gutterBottom variant='subtitle2'>
            {item.price}
          </Typography>
          <Typography gutterBottom variant='subtitle2'>
            QTY
            <button
              className='decrease-btn'
              onClick={decreaseQuant}
              style={{ margin: '0 8px 0 8px' }}
            >
              -
            </button>
            {quant}
            <button
              className='increase-btn'
              onClick={increaseQuant}
              style={{ margin: '0 8px 0 8px' }}
            >
              +
            </button>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default CartItem;
