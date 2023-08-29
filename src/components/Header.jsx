import { styled } from '@mui/system'
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { Box, display } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import React from 'react'
import CustomButton from './CustomButton'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import avatar from '../Img/avatar.png'
import { useSelector } from 'react-redux'

function Header () {

  const navigate = useNavigate()
  const [menu, setMenu] = useState({ left: false })

  const { cartTotalQuantity } = useSelector((state) => state.count);
  const toggleDrawer = (anchor, open) => event => {
    if (
      (event.type === 'keydown' && event.type === 'tab') ||
      event.type === 'shift'
    ) {
      return
    }
    setMenu({ ...menu, [anchor]: open })
  }

  const navLinks = [
    {
      path: '/',
      display: 'Home'
    },
    {
      path: '/menu',
      display: 'Menu'
    },
    {
      path: '/contact',
      display: 'Contact'
    },
    {
      path: '/about',
      display: 'About us'
    }
  ]
  const NavBarLinkCenter = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }))

  const NavBarLink = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: '540',
    color: '000000',
    cursor: 'pointer',
    '&:hover': {
      color: '#9a7fae'
    }
  }))
  const NavBarLinkLogo = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: '540',
    color: '000000',
    cursor: 'pointer',
    '&:hover': {
      color: '#9a7fae'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }))
  const NavbarImg = styled('img')(({ theme }) => ({
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    '&:hover': {
      width: '50px',
      height: '50px'
    },
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  }))
  const CustomMenu = styled(MenuIcon)(({ theme }) => ({
    display: 'none',
    cursor: 'pointer',

    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  }))
 const CartCount=styled(Typography)(({theme})=>({
    width: "20px",
    height: "20px",
   fontSize: "12px",
   display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#9a7fae",
  borderRadius: "50%",
  position: "absolute",
  top: "25px",
  right: "50px",
  
 }))
  const list = anchor => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLinks.map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => navigate(text.path)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <RestaurantIcon />}
                {index === 2 && <ContactPageIcon />}
                {index === 3 && <InfoIcon />}
              </ListItemIcon>
              <ListItemText primary={text.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: ' #dad7e6',
        padding: '20px'
      }}
    >
      <CustomMenu onClick={toggleDrawer('left', true)} />

      <Drawer
        anchor='left'
        open={menu['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>

      <NavBarLinkLogo
        variant='body'
        sx={{ marginLeft: '1px', fontWeight: '600', fontSize: '19px' }}
      >
        <Link to={'/'}>
          {' '}
          <NavbarImg src='logo.png'></NavbarImg>
        </Link>{' '}
        foodExpress
      </NavBarLinkLogo>

      <NavBarLinkCenter>
        {navLinks.map((item, index) => (
          <NavBarLink variant='body' onClick={() => navigate(item.path)}>
            {item.display}
          </NavBarLink>
        ))}
      </NavBarLinkCenter>
      <NavBarLink variant='body' sx={{ display: 'flex' }}>
        <img    

          src={avatar}
          style={{ width: '30px', height: '40px', margin: '10px' }}
        ></img>
        {/*  <CustomButton backgroundColor="#fff" color="#9a7fae" fontSize="10px" buttonTxt="Cart"/></Link> */}
        <CartCount>{cartTotalQuantity}</CartCount>
        <Link to={'/cart'}>
          <img
            src='https://www.caremonkey.com/wp-content/uploads/2020/05/Shopping-Carts-P3-circle-trbg-570x570-1.png'
            style={{ width: '30px', height: '40px', margin: '10px' }}
          ></img>
        </Link>
      </NavBarLink>

    </Box>
  )
}

export default Header
