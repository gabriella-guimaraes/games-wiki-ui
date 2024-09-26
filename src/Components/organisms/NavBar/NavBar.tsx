import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import styles from "./NavBar.module.css";
import { Link } from 'react-router-dom';

function NavBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "About",
            path: "/about"
        },
        {
            id: 3,
            name: "Gallery",
            path: "/gallery"
        },
        {
            id: 4,
            name: "Add Review",
            path: "/addReview"
        }
    ];
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#0a091009", borderBottom: "1px solid #68667ec7" }}>
      <Toolbar>
        <Typography variant="h6" align='left' color='text.primary' sx={{ flexGrow: 1, height: "100%" }} className={styles.title}>
            Games Wiki
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}>
                    <MenuItem onClick={handleClose}>
                        {item.name}
                    </MenuItem>

                  </Link>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Link 
              key={item.id}
              to={item.path}
               >
                <Button sx={{ color: theme.palette.text.primary }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar