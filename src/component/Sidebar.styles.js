import { styled } from '@mui/material/styles';
import { Box, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const LogoWrapper = styled(Box)({
    position: 'fixed',
    top: 30,
    zIndex: 3000,
    left: 20,

    '@media (max-width: 768px)': {
        top: 15,
    },
});

export const LogoImage = styled('img')({
    width: '65px',
    height: '50px',
    borderRadius: '6px',

    '@media (max-width: 768px)': {
        width: '45px',
        height: '40px',
    },
    '@media (max-width: 480px)': {
        width: '40px',
        height: '30px',
    },
});

export const SidebarContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'hovered',
})(({ hovered }) => ({
    width: hovered ? 270 : 70,
    transition: 'width 0.3s ease',
    overflowX: 'hidden',
    height: 'auto',
    position: 'fixed',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    color: 'rgba(255, 255, 255, 0.87)',
    zIndex: 1300,
    borderRadius: '0 8px 8px 0',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
    minHeight: '300px',
    overflowY: 'auto',
    backdropFilter: 'blur(1.5px)',
    WebkitBackdropFilter: 'blur(1.5px)',

    '@media (max-width: 768px)': {
        width: 55,
        left: 0,
    },
}));

export const StyledListItemButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'hovered',
})(({ hovered }) => ({
    minHeight: 60,
    justifyContent: hovered ? 'initial' : 'center',
    paddingLeft: hovered ? 30 : 0,
    paddingRight: hovered ? 30 : 0,
    transition: 'all 0.2s',

    '&:hover': {
        fontWeight: 'bold',
        transform: 'scale(1.05)',
    },

    '@media (max-width: 768px)': {
        minHeight: 50,
        paddingLeft: 0,
        paddingRight: 0,
    },
}));

export const StyledListItemIcon = styled(ListItemIcon, {
    shouldForwardProp: (prop) => prop !== 'hovered',
})(({ hovered }) => ({
    minWidth: 0,
    marginRight: hovered ? 12 : 'auto',
    justifyContent: 'center',
    color: 'inherit',

    '& svg': {
        fontSize: '2rem',
    },

    '@media (max-width: 768px)': {
        '& svg': {
            fontSize: '1.5rem',
        },
    },
}));

export const TextWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'hovered',
})(({ hovered }) => ({
    opacity: hovered ? 1 : 0,
    maxWidth: hovered ? '200px' : 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    transition: 'opacity 0.3s ease',

    '& span': {
        fontSize: '1.5rem',
    },

    '@media (max-width: 768px)': {
        display: 'none',
    },
}));

export const StyledNavLink = styled(NavLink)(() => ({
    textDecoration: 'none',
    color: '#8f98b2',

    '&:hover .MuiListItemIcon-root, &:hover span': {
        color: '#ffffff',
    },

    '&.active .MuiListItemIcon-root, &.active span': {
        color: '#ffffff',
        fontWeight: 'bold',
    },
}));

export const StyledListItem = styled(ListItem)({
    display: 'block',
    marginBottom: '3px',
});
