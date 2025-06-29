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


export const PopupWrapper = styled('div')(({ $isVisible }) => ({
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

    '@media (max-width: 1024px)': {
        width: '70vw',
    },
    '@media (max-width: 768px)': {
        width: '90vw',
        padding: '16px',
        borderRadius: '12px',
    },
    '@media (max-width: 480px)': {
        width: '95vw',
        padding: '12px',
    },
}));

export const ImageContainer = styled('div')({
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
});

export const PopupImage = styled('img')({
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '12px',
});

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
