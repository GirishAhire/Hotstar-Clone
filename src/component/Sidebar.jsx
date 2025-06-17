import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, List, ListItem, ListItemText } from '@mui/material';

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

import {
    LogoWrapper,
    LogoImage,
    SidebarContainer,
    StyledListItemButton,
    StyledListItemIcon,
    TextWrapper,
} from './Sidebar.styles';

export default function Sidebar() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);


    const menuItems = [
        { text: 'Home', icon: <Home />, path: '/' },
        { text: 'Search', icon: <Search />, path: '/' },
        { text: 'TV Shows', icon: <LiveTv />, path: '/' },
        { text: 'Movies', icon: <Movie />, path: '/' },
        { text: 'Sports', icon: <SportsSoccer />, path: '/' },
        { text: 'Sparks', icon: <FlashOn />, path: '/' },
        { text: 'Categories', icon: <Category />, path: '/' },
        { text: 'My Space', icon: <Person />, path: '/my-space' },
    ];

    return (
        <>
            <LogoWrapper>
                <LogoImage src={logo} alt="Logo" />
            </LogoWrapper>

            <SidebarContainer
                hovered={hovered}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >

                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                            <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <StyledListItemButton {...(hovered ? { hovered } : {})}>
                                    <StyledListItemIcon {...(hovered ? { hovered } : {})}>
                                        {item.icon}
                                    </StyledListItemIcon>
                                    <TextWrapper {...(hovered ? { hovered } : {})}>
                                        <ListItemText primary={item.text} />
                                    </TextWrapper>
                                </StyledListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </SidebarContainer>
        </>
    );
}
