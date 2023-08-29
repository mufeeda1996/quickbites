import React from 'react'
import { Alert, Box, styled, Typography } from '@mui/material'
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material'
import { addToCart } from '../Redux/countslice'
import { useDispatch } from 'react-redux'

function MenuDishes ({
  filteredItems,
  singleDish,
  ChildOfmenu,
  FontPrice,
  FontTitle,
  showDishes
}) {
  const Filterddishes = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '30px'
  }))

  const Alert = styled(Box)(({ theme }) => ({
    //   border: "1px solid #ff4848",
    backgroundColor: '#dad7e6',
    borderRadius: '10px',
    height: '14vh',
    width: '350px',
    color: '#fff',
    marginBottom: '80px',
    marginTop: '80px',
    marginLeft: '400px'
    //   alignItems: "center",
    //  padding:"10px"
  }))

  let maxItem = 4
  let beefDish = singleDish.map((item, index) => {
    if (index < maxItem) {
      return (
        <ChildOfmenu sx={{ backgroundColor: '#dad7e6' }}>
          <CardActionArea sx={{ backgroundColor: '#dad7e6' }}>
            <CardMedia
              component='img'
              height='100'
              image={item.strMealThumb}
              style={{
                marginTop: '-35px',
                marginLeft: '30px',
                width: '100px',
                borderRadius: '40px'
              }} // Replace this with the URL of the product image
            />
            <CardContent>
              <FontTitle gutterBottom variant='h5' component='div'>
                {item.strMeal}
              </FontTitle>
              <FontPrice variant='h6' color='black'>
                {item.price}
              </FontPrice>
              <Typography variant='body2' color='text.secondary'>
                <img
                  src='https://www.caremonkey.com/wp-content/uploads/2020/05/Shopping-Carts-P3-circle-trbg-570x570-1.png'
                  width='40px'
                ></img>
              </Typography>
            </CardContent>
          </CardActionArea>
        </ChildOfmenu>
      )
    }
  })

  return (
    <Box>
      <Filterddishes>
        {beefDish}
        {beefDish != 0 || filteredItems.length != 0 ? (
          showDishes
        ) : (
          <Alert>
            <Typography
              variant='h5'
              sx={{ marginLeft: '70px', marginTop: '20px' }}
            >
              {' '}
              Will Update Soon
            </Typography>
          </Alert>
        )}
      </Filterddishes>
    </Box>
  )
}

export default MenuDishes
