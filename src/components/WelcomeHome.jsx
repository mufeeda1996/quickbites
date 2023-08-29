import React from 'react'
import { Box, Typography } from '@mui/material'
import {styled} from '@mui/system'
import logo from '../../src/Img/welcomelogo.jpg'
import CustomButton from './CustomButton'
import {heroData} from '../../src/Utils/data'

function WelcomeHome() {

    const WelcomeLogo=styled(Box)(({theme})=>({
        backgroundImage: `url(${logo})`,
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
        width:"500px",
        height:"500px",
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

     const Cards=styled(Box)(({theme})=>({
         width:"150px",
         height:"170px",
         background:"  rgb(89, 56, 89);",
         boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
         marginTop:"-50px",
         marginLeft:"-20px",
         borderRadius:"20PX",
         [theme.breakpoints.down("md")]:{
            marginLeft:"-10px",
            
         }
     }))

  return (
    <WelcomeLogo >
    <Container >
    <Box sx={{display:'flex',flexDirection:"column"}}>
        <Box sx={{marginLeft:"70px",marginTop:"100px"}}>
        <button style={{borderRadius:"30px", backgroundColor:"#9a7fae", color:"#fff", fontSize:"17px",fontWeight:"bold", width:"170px",height:"37px"}}>Bike Delivery </button> 
        </Box>
        <WelcomeTitle sx={{marginLeft:"70px",marginTop:"20px"}}>
              The Fastest Delivery in{' '}
              <span style={{color:"#9a7fae"}}>
                Your City
              </span>
            </WelcomeTitle>
           
        <WelcomeBio sx={{marginLeft:"70px",marginTop:"30px"}}>
        Experience the fastest delivery in your city with City, where great food meets unparalleled convenience. Your satisfaction is our utmost priority, and we look forward to serving you with our passion for exceptional food and service.
        </WelcomeBio> 
        <Box sx={{marginLeft:"70px",marginTop:"30px"}}>
        <CustomButton  backgroundColor="#9a7fae" color="#fff" padding="10px" fontSize="12px" buttonTxt="Order  Now"/>
        </Box>
     
    </Box>
    
    <CardImage>
     {
         heroData.map((item)=>{
        return(
            <Box>
               <img src={item.imageSrc} style={{width:"100px"}}></img>
               <Cards>
               <Typography sx={{fontSize:"x-large",padding:"15px" ,fontFamily:"semibold",color:"#fff",margin:"15px"}}>{item.name}</Typography>
               <Typography sx={{fontSize:"large",padding:"15px" ,fontFamily:"semibold",marginTop:"-40px",marginLeft:"14px",color:"#9a7fae"}}>{item.description}</Typography>
               {/* <Typography sx={{fontSize:"large",padding:"15px" ,fontFamily:"semibold",color:"#fff"}}>{item.price}</Typography> */}
               </Cards>
            </Box>

         )})
     }
    </CardImage>
    </Container>
    </WelcomeLogo>
  )
}

export default WelcomeHome