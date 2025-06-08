import React from 'react';

import { useState } from 'react';

import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';

import {
    Home,
    Search,
    LiveTv,
    Movie,
    SportsSoccer,
    FlashOn,
    Category,
    Person,
} from '@mui/icons-material';

import logo from '../assets/logo.png';



export default function Sidebar() {
    const [hovered, setHovered] = useState(false);

    const drawerWidthCollapsed = 70;
    const drawerWidthExpanded = 240;

    const menuItems = [
        { text: 'Home', icon: <Home /> },
        { text: 'Search', icon: <Search /> },
        { text: 'TV Shows', icon: <LiveTv /> },
        { text: 'Movies', icon: <Movie /> },
        { text: 'Sports', icon: <SportsSoccer /> },
        { text: 'Sparks', icon: <FlashOn /> },
        { text: 'Categories', icon: <Category /> },
        { text: 'My Space', icon: <Person /> },
    ];

    let mouseEnter = () => {
        setHovered(true);
    }
    let mouseLeave = () => {
        setHovered(false);
    }

    return (
        <>
            <Box
                sx={{
                    position: 'fixed',
                    top: 30,
                    left: 15,
                    zIndex: 3000,
                }}
            >
                <img
                    src={logo}
                    alt="Logo"
                    style={{
                        width: '70px',
                        height: '50px',
                        borderRadius: '6px',
                    }}
                />
            </Box>

            <Box
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                sx={{
                    width: hovered ? drawerWidthExpanded : drawerWidthCollapsed,
                    transition: 'width 0.3s ease',
                    overflowX: 'hidden',
                    height: 'auto',
                    position: 'fixed',
                    top: '50%',
                    left: 12,
                    transform: 'translateY(-50%)',
                    // bgcolor: hovered ? 'rgba(0, 0, 0, 0)' : '#0f1014',
                    color: 'rgba(255, 255, 255, 0.87)',
                    zIndex: 1300,
                    borderRadius: '0 8px 8px 0',
                    // boxShadow: '2px 0 6px rgba(0,0,0,0.4)',
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: '90vh',
                    minHeight: '300px',
                    overflowY: 'auto',

                }}
            >
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 68,
                                    justifyContent: hovered ? 'initial' : 'center',
                                    px: 5,
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        fontWeight: 'bold',
                                        transform: 'scale(1.05)',
                                        '& .MuiListItemText-primary': {
                                            fontWeight: 'bold',
                                        },
                                    },
                                }}


                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: hovered ? 2 : 'auto',
                                        justifyContent: 'center',
                                        color: 'inherit',
                                        fontSize: '1.3rem',
                                        '& svg': {
                                            fontSize: '2rem',
                                        },
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>

                                <Box
                                    sx={{
                                        opacity: hovered ? 1 : 0,
                                        maxWidth: hovered ? '200px' : 0,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        transition: 'opacity 0.3s ease, max-width 0.3s ease',
                                        '& .MuiListItemText-primary': {
                                            fontSize: '1.3rem',
                                        },
                                    }}
                                >
                                    <ListItemText primary={item.text} />
                                </Box>

                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>
    );
}
