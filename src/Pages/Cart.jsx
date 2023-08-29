import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-scroll'
import { useEffect } from "react";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '../Redux/countslice';

function Cart () { 

  const { cartItems,cartTotalAmount } = useSelector(state => state.count)
  
  console.log("amount",cartItems)
  
  const cart = useSelector((state) => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
 
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const CardImage = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '400px',
    minHeight: '500px',
    fontSize: '1.3rem',
    backdropFilter: 'blur(10px)',
    marginTop: '100px',
    marginLeft: '370px',
    padding: '30px',
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
    [theme.breakpoints.down('md')]: {
      width: '300px',
      marginTop: '10px',
      marginLeft: '14px'
    }
  }))

  const ListStyle = styled('li')(({ theme }) => ({
    listStyle: 'none',
    backgroundColor: ' #dad7e6',
    marginTop: '20px',
    marginLeft: '-40px',
    width: '400px',
    height: '70px',
    [theme.breakpoints.down('md')]: {
      width: '359px',
      marginTop: '10px',
      marginLeft: '-38px'
    }
  }))
  const Btn = styled('button')(({ theme }) => ({
    width: '30px',
    backgroundColor: '#9a7fae',
    border: 'none',
    cursor: 'pointer',
    height: '30px',
    marginRight: '10px',
    marginLeft: '10px',
   
  }))

  const Span =styled ('span')(({theme})=>({
    marginLeft:"80px",fontWeight:"600",
    [theme.breakpoints.down('md')]:{
      marginLeft:"50px"
    }
  }))
  const ButtonClear= styled('button')(({ theme }) => ({
    width: '100px',
    backgroundColor: '#9a7fae',
    border: 'none',
    cursor: 'pointer',
    height: '30px',
    marginRight: '10px',
    marginLeft: '0px',
    marginTop:"24.5px",
    [theme.breakpoints.down('md')]:{
      marginLeft: '22px',
      marginTop:"24.5px",
      width: '60px'
    }
  }))
  const ButtonCheckout=styled('button')(({ theme }) => ({
    // width: '100px',
    // backgroundColor: '#9a7fae',
    border: 'none',
    cursor: 'pointer',
    height: '30px',
    marginRight: '10px',
    // marginLeft: '10px',
    backgroundColor:'#9a7fae',width:"200px",marginLeft:"90px",
    [theme.breakpoints.down('md')]: {
      width: '130px',
      marginLeft: '100px'
    }
    
  }))
  return (
    <Box>
      <CardImage>
      {cart.cartItems.length === 0 ? (
        <Typography sx={{ marginLeft: '1px', fontWeight: '600', fontSize: '19px' }}>cart is empty</Typography>):(
        <Box>
          {/* <Typography
            sx={{ marginLeft: '1px', fontWeight: '600', fontSize: '19px' }}
          >
            Add Your Order Here
          </Typography> */}

          <ul>
            {cartItems.map(items => {
              return (
                <div>
                  <ListStyle>
                    <Box sx={{ display: 'flex' }}>
                      <img
                        style={{ marginLeft: '20px', marginTop: '10px' }}
                        src={items.imageSrc}
                        width='50px'
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-around',
                          marginLeft: '30px',
                          marginTop:"20px"
                        }}
                      >
                        <Btn onClick={()=>handleAddToCart(items)} >
                          +
                        </Btn>
                        <Typography> {items.cartQuantity}</Typography>
                        <Btn onClick={()=>handleDecreaseCart(items)} >
                          -
                        </Btn>
                      </Box>
                      <Box sx={{ marginLeft: '50px', marginTop: '10px' }}>
                        <Typography>{items.name}</Typography>
                        <Typography> ${items.price * items.cartQuantity}</Typography>
                      </Box>
                      
                    </Box>
                  </ListStyle>
                </div>
              )
            })}
          </ul>
          <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
            <Box>
             <ButtonClear  onClick={() => handleClearCart()}>
              Clear
            </ButtonClear>
            </Box>
          <Box sx={{ width:"270px",maxWidth: "500px"}}>
              <Box>
                <span style={{fontSize:".9em",marginLeft:"100px"}}>Subtotal</span>
                <Span style={{}}>${cartTotalAmount}</Span>
              </Box>
              <ButtonCheckout >Check out</ButtonCheckout>
              <Box>
                 <Link to="/">
                  <span style={{marginLeft:'90px'}}>Continue Shopping</span>
                </Link>
              </Box>
            </Box>
            </Box>
        </Box>
        )}</CardImage>
    </Box>
  )
}

export default Cart
