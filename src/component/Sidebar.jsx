import React, { useState } from 'react';
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
    StyledNavLink,
    StyledListItem,
} from './Sidebar.styles';

export default function Sidebar() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const menuItems = [
        { text: 'Home', icon: <HomeRoundedIcon />, path: '/' },
        { text: 'Search', icon: <Search />, path: '/search' },
        { text: 'TV', icon: <Tv />, path: '/TV' },
        { text: 'Movies', icon: <FastfoodIcon />, path: '/Movies' },
        { text: 'Sports', icon: <DirectionsRunRoundedIcon />, path: '*' },
        { text: 'Sparks', icon: <VideoCameraBackRounded />, path: '*' },
        { text: 'Categories', icon: <Category />, path: '*' },
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
                <ul>
                    {menuItems.map((item) => (
                        <StyledListItem key={item.text} disablePadding>
                            <StyledNavLink to={item.path}>
                                <StyledListItemButton hovered={hovered}>
                                    <StyledListItemIcon hovered={hovered}>
                                        {item.icon}
                                    </StyledListItemIcon>
                                    <TextWrapper hovered={hovered}>
                                        <span>{item.text}</span>
                                    </TextWrapper>
                                </StyledListItemButton>
                            </StyledNavLink>
                        </StyledListItem>
                    ))}
                </ul>
            </SidebarContainer>
        </>
    );
}
