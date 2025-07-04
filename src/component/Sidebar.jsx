import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, List, ListItem, ListItemText } from '@mui/material';

import {
    Search,
    Tv,
    VideoCameraBackRounded,
    Category,
    AccountCircleRounded,
} from '@mui/icons-material';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded';

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
        { text: 'Home', icon: <HomeRoundedIcon />, path: '/' },
        { text: 'Search', icon: <Search />, path: '/search' },
        { text: 'TV Shows', icon: <Tv />, path: '/' },
        { text: 'Movies', icon: <FastfoodIcon />, path: '/' },
        { text: 'Sports', icon: <DirectionsRunRoundedIcon />, path: '/' },
        { text: 'Sparks', icon: <VideoCameraBackRounded />, path: '/' },
        { text: 'Categories', icon: <Category />, path: '/' },
        { text: 'My Space', icon: <AccountCircleRounded />, path: '/my-space' },
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
