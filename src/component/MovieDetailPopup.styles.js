import { styled } from '@mui/material/styles';

export const Backdrop = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
});

export const PopupWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0f1014',
    borderRadius: '16px',
    width: '55vw',
    height: 'auto',
    maxHeight: '85vh',
    overflowY: 'auto',
    color: '#ffffff',
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
});

export const PopupImage = styled('img')({
    height: '70vh',
    objectFit:'contain',
    borderRadius: '12px',
    // marginBottom: '1rem',
});

export const Content = styled('div')({
    padding: '0 1rem',
    h2: {
        fontSize: '1.6rem',
        marginBottom: '0.5rem',
    },
    p: {
        fontSize: '1.4rem',
        lineHeight: 1.6,
        color: '#ffffff',
    },
});

export const CloseButton = styled('button')({
    position: 'absolute',
    top: '10px',
    right: '15px',
    color: '#ffffff',
    background: 'transparent',
    border: 'none',
    fontSize: '3.5rem',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',

});
