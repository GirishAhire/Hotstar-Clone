// Sidebar.styles.js
import { styled } from '@mui/material/styles';
import { Box, ListItemButton, ListItemIcon } from '@mui/material';

export const LogoWrapper = styled(Box)({
    position: 'fixed',
    top: 30,
    left: 15,
    zIndex: 3000,
});

export const LogoImage = styled('img')({
    width: '70px',
    height: '50px',
    borderRadius: '6px',
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
    left: 12,
    transform: 'translateY(-50%)',
    color: 'rgba(255, 255, 255, 0.87)',
    zIndex: 1300,
    borderRadius: '0 8px 8px 0',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '90vh',
    minHeight: '300px',
    overflowY: 'auto',
}));

export const StyledListItemButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'hovered',
})(({ hovered }) => ({
    minHeight: 68,
    justifyContent: hovered ? 'initial' : 'center',
    paddingLeft: 40,
    paddingRight: 40,
    transition: 'all 0.2s',
    '&:hover': {
        fontWeight: 'bold',
        transform: 'scale(1.05)',
        '& .MuiListItemText-primary': {
            fontWeight: 'bold',
        },
    },
}));

export const StyledListItemIcon = styled(ListItemIcon, {
    shouldForwardProp: (prop) => prop !== 'hovered',
})(({ hovered }) => ({
    minWidth: 0,
    marginRight: hovered ? 16 : 'auto',
    justifyContent: 'center',
    color: 'inherit',
    '& svg': {
        fontSize: '2rem',
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
        fontSize: '1.3rem',
    },
}));
