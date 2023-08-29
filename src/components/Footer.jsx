import React from 'react'
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box ,styled} from '@mui/system';
import { Typography } from '@mui/material';
import { Phone } from '@mui/icons-material';


function Footer() {
    const Title=styled(Typography)(({theme})=>({
        marginLeft:"480px",
        fontSize:"24px",
        fontWeight:"bold",
         padding:"10px",
        [theme.breakpoints.down("md")]:{
            marginLeft:"80px",
            fontSize:"24px",
            fontWeight:"bold",
            padding:"10px"
        }
        
}))
const Boxstyle = styled(Box)(({theme})=>({
     display:"flex",
     justifyContent:"space-evenly",
     marginLeft:"20px",
     marginTop:"30px",
     "&:hover":{
        color:"#9a7fae"
     },
     [theme.breakpoints.down("md")]:{
        display:"block",
        justifyContent:"space-evenly",
         marginLeft:"110px",
         marginTop:"-10px",
     }
   
}))

const Phone=styled(Typography)(({theme})=>({
    marginLeft:"20px",
    [theme.breakpoints.down("md")]:{
        marginLeft:"0px"
    }
}))

const Email=styled(Typography)(({theme})=>({
    marginLeft:"60px",
    [theme.breakpoints.down("md")]:{
        marginLeft:"0px"
    }
}))

  return (
   <Box>
    <hr style={{marginTop:"70px"}}></hr>
        <Title><span style={{textDecoration:"underline #9a7fae solid 3px"}}>Our &</span> <span style={{color:"#9a7fae"}}> Contacts</span></Title>
        <Boxstyle sx={{}}>
      <Box >
        <Phone><PhoneCallbackOutlinedIcon/> </Phone>
        <Typography>9876543210</Typography>
      </Box>
      <Box>
        <Email><EmailOutlinedIcon/> </Email>
        <Typography>abcexample@gmail.com</Typography>
      </Box>
      <Box sx={{display:"flex",flexDirection:"row"}}>
        <Typography><LinkedInIcon/> </Typography>
        <Typography><InstagramIcon/></Typography>
        <Typography><FacebookIcon/></Typography>
      </Box>
      </Boxstyle>
      <hr style={{marginTop:"70px"}}></hr>
    </Box>
  )
}

export default Footer