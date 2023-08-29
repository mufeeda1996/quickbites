import React from 'react'
import { Box, Typography } from '@mui/material'
import {styled} from '@mui/system'
import bglogo from '../../src/Img/bg-3.jpg'


function AboutUs() {
  
    const WelcomeLogo=styled(Box)(({theme})=>({
        backgroundImage: `url(${bglogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.down("md")]:{
            display:"block"
         }
    }))

    const Container=styled(Box)(({theme})=>({
        display:'flex',justifyContent:"space-between",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column"
        }
    }))
    const WelcomeTitle=styled(Typography)(({theme})=>({
        fontSize:"4rem",
        width:"400px",
        fontWeight:"bold",
        color:"#ffffff",
        lineHeight:"80px",
        [theme.breakpoints.down("md")]:{
        fontSize:"3rem",
        width:"300px"
         }
      
    }))

    const WelcomeBio=styled(Typography)(({theme})=>({
        fontSize:"15px",
        width:"400px",
        color:"#ffffff",
        [theme.breakpoints.down("md")]:{
            fontSize:"13px",
            width:"300px"
             }
    }))
    const CardImage=styled(Box)(({theme})=>({
        display:"flex" ,
        justifyContent:"space-around",
        flexWrap:"wrap",
        width:"400px",
        height:"500px",
        color:"#fff",
        fontSize:"1.3rem",
        backdropFilter: 'blur(10px)',
        marginTop:"100px",
        marginRight:"70px",
        padding:"30px",
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
        [theme.breakpoints.down("md")]:{
            width:"330px",
            marginTop:"10px"
            

        }
       }))


  return (
    <WelcomeLogo >
    <Container >
    <Box sx={{display:'flex',flexDirection:"column"}}>
        <Box sx={{marginLeft:"70px",marginTop:"100px"}}>
        <button style={{borderRadius:"30px", backgroundColor:"#9a7fae", color:"#fff", fontSize:"17px",fontWeight:"bold", width:"170px",height:"37px"}}>Best choice </button> 
        </Box>
        <WelcomeTitle sx={{marginLeft:"70px",marginTop:"20px"}}>
              The Fastest Delivery in{' '}
              <span style={{color:"#9a7fae"}}>
                Your City
              </span>
            </WelcomeTitle>
           
        <WelcomeBio sx={{marginLeft:"70px",marginTop:"30px",color:"#000000"}}>
        Welcome to our food and fresh food delivery app, where we bring the ultimate convenience and speed to your dining experience. We take pride in being the go-to platform for delivering delectable meals and fresh produce straight to your doorstep, ensuring you never have to compromise on quality, taste, or time. Our mission is to revolutionize the way you enjoy food by offering the fastest delivery service in your city. We strive to eliminate the wait and deliver your favorite dishes and fresh ingredients to you promptly, so you can savor every bite without delay..
        </WelcomeBio> 
        <Box sx={{marginLeft:"70px",marginTop:"30px"}}>
        {/* <CustomButton  backgroundColor="#9a7fae" color="#fff" padding="10px" fontSize="12px" buttonTxt="Best choice"/> */}
        </Box>
     
    </Box>
    
    <CardImage>
     
            <Box>
               <Typography sx={{marginTop:"100px"}}>Welcome to our food and fresh food delivery app, where we bring
              the ultimate convenience and speed to your dining experience. We
              take pride in being the go-to platform for delivering delectable
              meals and fresh produce straight to your doorstep, ensuring you
              never have to compromise on quality, taste, or time. Our mission
              is to revolutionize the way you enjoy food by offering the fastest
              delivery service in your city. We strive to eliminate the wait and
              deliver your favorite dishes and fresh ingredients to you
              promptly, so you can savor every bite without delay.</Typography>
               {/* <Cards>
               <Typography sx={{fontSize:"x-large",padding:"15px" ,fontFamily:"semibold",color:"#fff",margin:"15px"}}>{item.name}</Typography>
               <Typography sx={{fontSize:"large",padding:"15px" ,fontFamily:"semibold",marginTop:"-40px",marginLeft:"14px",color:"#9a7fae"}}>{item.description}</Typography>
               {/* <Typography sx={{fontSize:"large",padding:"15px" ,fontFamily:"semibold",color:"#fff"}}>{item.price}</Typography> */}
               {/* </Cards> */} 
            </Box>

        
    </CardImage>
    </Container>
    </WelcomeLogo>
  )
}
  

export default AboutUs