import { styled } from '@mui/material/styles';
import { Box, ListItemButton, ListItemIcon } from '@mui/material';

export const LogoWrapper = styled(Box)({
    position: 'fixed',
    top: 20,
    zIndex: 3000,

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
    width: hovered ? 240 : 70,
    transition: 'width 0.3s ease',
    overflowX: 'hidden',
    height: 'auto',
    position: 'fixed',
    top: '50%',
    left: 25,
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
        left: 25,
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
        '& .MuiListItemText-primary': {
            fontWeight: 'bold',
        },
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
        fontSize: '1.8rem',
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
    transition: 'opacity 0.3s ease, max-width 0.3s ease',
    '& .MuiListItemText-primary': {
        fontSize: '1.5rem',
    },
    '@media (max-width: 768px)': {
        display: 'none',
    },
}));
