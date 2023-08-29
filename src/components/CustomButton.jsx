import { Button } from '@mui/material'
import {fontWeight, styled} from '@mui/system'
import React from 'react'


const CustomButton=({
    backgroundColor,
    color,
    padding,
    buttonTxt,
    welcomeBtn,
    getStartBtn,
    guideBtn,
    fontSize,
    borderRadius,
}) =>{
    const CustomButton =styled(Button)(({theme})=>( {
    backgroundColor: backgroundColor,
    color:color,
    buttonTxt: buttonTxt,
    fontSize:fontSize,
    fontWeight:"580",
    border:"1px transparent",
    cursor:"pointer",
    transform:"none",
    display:"block",
    padding:padding,
    margin:"5px",
    borderRadius:borderRadius,
    '&: hover':{
       backgroundColor:color,
       color:backgroundColor
    },
    [theme.breakpoints.down("md")]:{
        margin:(welcomeBtn || getStartBtn) && theme.spacing(0,"auto",3,"auto"),
        width:(welcomeBtn || getStartBtn) &&"90%"
    },
    [theme.breakpoints.down("sm")]:{
        marginTop:guideBtn&& theme.spacing(3),
        width:guideBtn && "90%"
    },
  }))

  return (
    
    <CustomButton >
        {buttonTxt}
    </CustomButton >
    
  )
}
export default CustomButton