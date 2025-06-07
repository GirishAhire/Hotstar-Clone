import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieIcon from '@mui/icons-material/Movie';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../assets/logo.png';

const drawerWidthCollapsed = 60;
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
    const [hovered, setHovered] = React.useState(false);

    return (
        <>
            {/* Top-left logo */}
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
                        width: '80px',
                        height: '60px',
                        borderRadius: '6px',
                    }}
                />
            </Box>

            {/* Sidebar */}
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
                    left: 0,
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
                                    minHeight: 48,
                                    justifyContent: hovered ? 'initial' : 'center',
                                    px: 4,
                                    transition: 'all 0.2s',
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: hovered ? 2 : 'auto',
                                        justifyContent: 'center',
                                        color: 'inherit',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>

                                {/* Smoothly show/hide text */}
                                <Box
                                    sx={{
                                        opacity: hovered ? 1 : 0,
                                        maxWidth: hovered ? '200px' : 0,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        transition: 'opacity 0.3s ease, max-width 0.3s ease',
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
