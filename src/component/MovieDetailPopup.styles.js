import { styled } from '@mui/material/styles';

export const Backdrop = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
    overflow: 'hidden',
});

export const PopupWrapper = styled('div')(({ $isVisible, theme }) => ({
    display: $isVisible ? 'flex' : 'none',
    flexDirection: 'column',
    backgroundColor: '#0f1014',
    borderRadius: '20px',
    width: '60vw',
    maxHeight: '95vh',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 0 25px rgba(0,0,0,0.6)',
    animation: 'fadeIn 0.3s ease-in-out',

    '@keyframes fadeIn': {
        from: { transform: 'scale(0.95)', opacity: 0 },
        to: { transform: 'scale(1)', opacity: 1 },
    },

    [theme.breakpoints.down('lg')]: {
        width: '70vw',
    },
    [theme.breakpoints.down('md')]: {
        width: '90vw',
        padding: '16px',
        borderRadius: '12px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '95vw',
        padding: '12px',
    },
}));

export const ImageContainer = styled('div')({
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
});

export const PopupImage = styled('img')(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '12px',

    [theme.breakpoints.down('sm')]: {
        maxHeight: '300px',
    },
}));

export const Content = styled('div')({
    padding: '0 1rem 1rem 1rem',
    fontFamily: 'sans-serif',

    '& h2': {
        fontSize: '1.8rem',
        marginBottom: '0.5rem',
        color: '#E1E6F0',
    },
    '& p': {
        fontSize: '1.3rem',
        lineHeight: 1.6,
        color: '#e1e6f0',
    },
});

export const CloseButton = styled('button')({
    position: 'absolute',
    top: '10px',
    right: '25px',
    color: '#ffffff',
    background: 'transparent',
    border: 'none',
    fontSize: '3rem',
    cursor: 'pointer',
    zIndex: 3,
    transition: 'transform 0.2s ease',
    '&:hover': {
        transform: 'scale(1.1)',
    },
});

export const ImageInfoOverlay = styled('div')({
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    color: '#ffffff',
    padding: '0.8rem 1rem',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
});

export const InfoItem = styled('div')({
    borderRadius: '8px',
    fontSize: '1.2rem',
    color: '#ffffff',
    fontWeight: 600,
});

export const ButtonContainer = styled('div')(({ theme }) => ({
    marginTop: '10px',
    display: 'flex',
    gap: '20px',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',

    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
    },
}));

export const WatchNowButton = styled('button')(({ theme }) => ({
    background: 'linear-gradient(92.7deg, #1492ff 0%, #0860c4 50%, #eb0066 100%)',
    color: '#fff',
    border: 'none',
    width: '350px',
    height: '60px',
    padding: '10px 40px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '1.3rem',
    cursor: 'pointer',
    transition: 'background 0.3s',

    '&:hover': {
        filter: 'brightness(1.1)',
    },

    [theme.breakpoints.down('sm')]: {
        width: '100%',
        fontSize: '1.1rem',
        padding: '10px',
    },
}));

export const WatchlistButton = styled('button')(() => ({
    backgroundColor: '#ffffff14',
    color: '#ffffff',
    border: '0 solid',
    width: '60px',
    height: '60px',
    padding: '10px 20px',
    borderRadius: '10px',
    fontSize: '30px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background 0.3s, color 0.3s',

    svg: {
        fontSize: '28px',
    },

    '&:hover': {
        backgroundColor: '#ffffff50',
    },
}));

export const LeftShadowOverlay = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '40%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent)',
    zIndex: 3,
    pointerEvents: 'none',
});
