import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stack, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/images/Logo.png';

const Navbar = () => {
  const [activeButton, setActiveButton] = useState('Home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveButton('Home');
    else if (path === '/exercise') setActiveButton('Exercises');
    else if (path.startsWith('/workout-plans')) setActiveButton('WorkoutPlans');
    else if (path === '/profile') setActiveButton('Profile');
    else if (path === '/about') setActiveButton('About');
  }, [location]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const NavButton = ({ name, to }) => (
    <Link
      to={to}
      onClick={() => {
        setActiveButton(name);
        if (isMobile) setDrawerOpen(false);
      }}
      style={{
        textDecoration: 'none',
        color: '#3A1212',
        borderBottom: activeButton === name ? '3px solid #FF2625' : 'none',
        paddingBottom: '3px'
      }}
    >
      {name}
    </Link>
  );

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Exercises', to: '/exercise' },
    { name: 'WorkoutPlans', to: '/workout-plans' },
    { name: 'Profile', to: '/profile' },
    { name: 'About', to: '/about' },
  ];

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.name} onClick={handleDrawerToggle}>
          <NavButton name={item.name} to={item.to} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Stack 
      direction="row" 
      justifyContent="space-around" 
      sx={{ 
        gap: { sm: '33px', xs: '40px' }, 
        mt: { sm: '32px', xs: '20px' }, 
        justifyContent: 'none',
        px: '20px',
      }} 
      
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
      </Link>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerToggle}
          >
            {drawer}
          </Drawer>
        </>
      ) : (
        <Stack
          direction="row"
          gap="40px"
          fontFamily="Alegreya"
          fontSize="24px"
          alignItems="flex-end"
        >
          {navItems.map((item) => (
            <NavButton key={item.name} name={item.name} to={item.to} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default Navbar;