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
    Home as HomeIcon,
    Search as SearchIcon,
    LiveTv as LiveTvIcon,
    Movie as MovieIcon,
    SportsSoccer as SportsSoccerIcon,
    FlashOn as FlashOnIcon,
    Category as CategoryIcon,
    Person as PersonIcon,
} from '@mui/icons-material';

import logo from '../assets/logo.png';

const drawerWidthCollapsed = 70;
const drawerWidthExpanded = 240;

const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Search', icon: <SearchIcon /> },
    { text: 'TV Shows', icon: <LiveTvIcon /> },
    { text: 'Movies', icon: <MovieIcon /> },
    { text: 'Sports', icon: <SportsSoccerIcon /> },
    { text: 'Sparks', icon: <FlashOnIcon /> },
    { text: 'Categories', icon: <CategoryIcon /> },
    { text: 'My Space', icon: <PersonIcon /> },
];

export default function Sidebar() {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <Box
                sx={{
                    position: 'fixed',
                    top: 30,
                    left: 7,
                    zIndex: 3000,
                }}
            >
                <img
                    src={logo}
                    alt="Logo"
                    style={{
                        width: '80px',
                        height: '60px',
                        borderRadius: '6px',
                    }}
                />
            </Box>

            <Box
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                    width: hovered ? drawerWidthExpanded : drawerWidthCollapsed,
                    transition: 'width 0.3s ease',
                    overflowX: 'hidden',
                    height: 'auto',
                    position: 'fixed',
                    top: '50%',
                    left: 10,
                    transform: 'translateY(-50%)',
                    bgcolor: '#0f1014',
                    color: 'rgba(255, 255, 255, 0.87)',
                    zIndex: 1300,
                    borderRadius: '0 8px 8px 0',
                    boxShadow: '2px 0 6px rgba(0,0,0,0.4)',
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
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        transform: 'scale(1.05)',
                                        '& .MuiListItemIcon-root': {
                                            color: '#fff',
                                        },
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
                                            fontSize: '2.3rem',
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
                                            transition: 'all 0.3s ease',
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
