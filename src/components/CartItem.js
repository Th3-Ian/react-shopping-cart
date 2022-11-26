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

function CartItem({ item, addCart, removeCart, removeItem }) {
  const [quant, setQuant] = useState(0);

  const itemNum = item.quantity;

  useEffect(() => {
    setQuant(itemNum);
  }, []);

  const decreaseQuant = () => {
    setQuant(quant > 1 ? quant - 1 : null);
    removeCart(item, quant - 1);
  };

  const increaseQuant = () => {
    setQuant(quant + 1);
    addCart(item, quant);
  };

  return (
    <Card
      elevation={3}
      style={{ display: 'flex', width: '150%', justifyContent: 'center' }}
    >
      <CardMedia
        style={{ height: 120, width: 120 }}
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
          <Typography gutterBottom variant='h6' style={{ marginTop: 5 }}>
            {item.name}
          </Typography>
          <Button
            onClick={() => removeCart(item, null)}
            style={{ marginBottom: 20 }}
          >
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
          <Typography
            gutterBottom
            variant='subtitle2'
            style={{ marginRight: 10 }}
          >
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
