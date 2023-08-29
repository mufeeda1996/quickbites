import React, { useState,useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import {styled} from '@mui/system'
import {useDispatch} from 'react-redux'
import { Card, CardActionArea, CardContent, CardMedia} from '@mui/material';
import {fruitsData} from '../../src/Utils/data'
import { addToCart } from '../Redux/countslice'
function MenuContainer() {

  const dispatch = useDispatch();
   
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log("item",item)
  };

    const Title=styled(Typography)(({theme})=>({
        marginLeft:"80px",
        fontSize:"24px",
        fontWeight:"bold",
        padding:"10px"
       
}))
    const Boxstyle=styled(Box)(({theme})=>({
        backgroundColor:"#dad7e6",
        width:"370",
        height:"220px",
         marginLeft:"120px",
         marginTop:"70px",
         borderRadius:"13px",
         marginRight:"-80px",padding:"20px",
         [theme.breakpoints.down("md")]:{
            marginLeft:"60px",
         marginRight:"0px",
         marginTop:"50px",
         }
    }))
    const FontTitle=styled(Typography)(({theme})=>({
        fontSize:"19px",
        color:"#fff",
        fontWeight:"bold"

    }))
    const FontPrice=styled(Typography)(({theme})=>({
        fontSize:"19px"

    }))

    const Rawslider=styled(Box)(({theme})=>({
    display: "flex",
    padding: "20px",
    overflowX:"scroll",
    overflowY:"hidden",

    }))

  
  return (
  <Box>
        <hr style={{marginTop:"70px"}}></hr>
        <Title><span style={{textDecoration:"underline #9a7fae solid 3px"}}>Our Fresh &</span> <span style={{color:"#9a7fae"}}>Healthy Fruits</span></Title>
        <Card>
        <Rawslider className='rawslider'>
            {
              fruitsData.map((item)=>{
              return(
            <Box sx={{width:"100%"}}>
            <Boxstyle >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.imageSrc}
                style={{marginTop:"-55px"}} // Replace this with the URL of the product image
             />
              <CardContent>
                <FontTitle gutterBottom variant="h5" component="div">
                  {item. name}
                </FontTitle>
                <FontPrice variant="h6" color="black">
                  {item.price}
                </FontPrice>
                <Typography variant="body2" color="text.secondary">
                  <img onClick={()=>handleAddToCart(item)}  src="https://www.caremonkey.com/wp-content/uploads/2020/05/Shopping-Carts-P3-circle-trbg-570x570-1.png" width="40px"></img>
                </Typography> 

              </CardContent>
            </CardActionArea>
          </Boxstyle>
          
          </Box>)}
        )
             
          }
          
        </Rawslider>
        </Card>
    </Box>
  )
}

export default MenuContainer