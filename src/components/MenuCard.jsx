import React from 'react'
import { Box, Typography,styled } from '@mui/material'
import { Card, CardActionArea, CardContent, CardMedia} from '@mui/material';
import Loader from './Loader'
import wallpaper from '../../src/Img/w1.jpg'
import { useState,useEffect } from 'react'
import MenuDishes from './MenuDishes'
import {category} from '../../src/Utils/food'
import {meals} from '../../src/Utils/food'
import {beef}  from '../../src/Utils/food'

function MenuCard({isLoading}) {

    
    const [filteredItems,setFilteredItems]=useState([])
    let [singleDish,setSingleDish]=useState([])
    let [currrentPageState,setCurrentPageState]=useState(1)
    let [itemPerPage,setItemPerPage]=useState(4)
    let lastIndexOf =currrentPageState * itemPerPage
    let firstIndexOf= lastIndexOf - itemPerPage

    let showDishes=filteredItems.slice(firstIndexOf,lastIndexOf)

    useEffect(() => {
      setSingleDish(beef)
      }, [])
    
 
  
   const Title=styled(Typography)(({theme})=>({
    marginLeft:"80px",
    fontSize:"24px",
    fontWeight:"bold",
    padding:"10px",
    color:"#fff"
}))
const NavbarImg=styled('img')(({theme})=>( {
    width:'30px',
    height:'30px',
    display:"flex",
    alignItems:"center",
    gap:theme.spacing(2)
  }))
const Menubutton=styled('button')(({theme})=>({
    width:"110px",
    height:"100px",
    backgroundColor:"#fff",
    color:"#9a7fae",
    marginTop:"20px",
    marginLeft:"90px",
    marginRight:"-30px",
    
    "&:hover" :{
        backgroundColor:"#9a7fae",
        color:"#fff"

    }
}))
    const Logoalign=styled(Box)(({theme})=>({
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:"25px",
        
    }))

    const ChildOfmenu=styled(Box)(({theme})=>({
      backgroundColor: "rgb(89, 56, 89)",
      marginLeft: "100px",
      marginRight:"-50px",
      marginTop: "80px",
      width: "300px",
      height:"200px",
      borderRadius:"10px",
      [theme.breakpoints.down("md")]:{
        marginLeft: "90px",
        marginRight:"-50px",
        marginTop: "80px",
        width: "250px",
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
    let maxSpecialMenu=6
    
      function handleClick(Category){
        setSingleDish([])
        console.log("clicked",Category)
        let filteredItemsAre=meals.filter((item)=>{
          return item.strCategory===Category
        }).map((item,index)=>{
          if(index<maxSpecialMenu)
          return(
            <ChildOfmenu sx={{ backgroundColor:"#dad7e6"}}>
              <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                
                image={item.strMealThumb}
                style={{marginTop:"-35px",marginLeft:"30px",width:"100px",borderRadius:"40px"}} // Replace this with the URL of the product image
             />
              <CardContent>
                <FontTitle gutterBottom variant="h5" component="div">
                  {item. strMeal}
                </FontTitle>
                <FontPrice variant="h6" color="black">
                  {item.price}
                </FontPrice>
                <Typography variant="body2" color="text.secondary">
                <img src="https://www.caremonkey.com/wp-content/uploads/2020/05/Shopping-Carts-P3-circle-trbg-570x570-1.png" width="40px"></img>
                </Typography> 
              </CardContent>
            </CardActionArea>
            </ChildOfmenu>
              )
        }) 
        setFilteredItems(filteredItemsAre) 
      }
   
  return (
   <Box sx={{backgroundImage:`url(${wallpaper})`}}>
    
    <hr style={{marginTop:"50px"}}></hr>
        <Title><span style={{textDecoration:"underline #9a7fae solid 3px"}}>Our Hot</span> <span style={{color:"#9a7fae"}}>Dishes</span></Title>
        
          
          { 
            category.map((item,index)=>{
                if(index<maxSpecialMenu)
            return(
                <Menubutton>
                 <Logoalign>
                 <NavbarImg src='logo.png' ></NavbarImg>
                 <Typography onClick={()=>{handleClick(item.strCategory)}}> {item.strCategory}</Typography>
                 </Logoalign>
                 </Menubutton>
            )
            })}
       
           
          
          <div>
          {isLoading ? (
           <Loader />
           ) : (
          <MenuDishes filteredItems={filteredItems} 
          singleDish={singleDish}
           ChildOfmenu={ChildOfmenu}
           FontTitle={FontTitle}
           FontPrice={FontPrice}
           showDishes={showDishes}/>
           )}
          </div>
          
       
         
       </Box>
  )

}

export default MenuCard