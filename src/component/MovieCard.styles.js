import { styled } from '@mui/material/styles';

export const MovieCardWrapper = styled('div')({
    width: '240px',
    height: '380px',
    backgroundColor: '#1e1e1e',
    borderRadius: '8px',
    // overflow: 'hidden',
    flex: '0 0 auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    transition: 'transform 0.3s ease-in-out',

    '&:hover': {
        borderRadius: '10px',
        transform: 'scale(1.07)',
        zIndex: 10,
    },

    '@media (max-width: 1024px)': {
        width: '240px',
        height: '320px',
    },
    '@media (max-width: 768px)': {
        width: '170px',
        height: '270px',
        marginLeft: '5px',
    },
    '@media (max-width: 480px)': {
        width: '140px',
        height: '220px',
    },
});

export const MovieImage = styled('img')(({ loaded }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    opacity: loaded ? 1 : 0,
    transition: 'opacity 0.3s ease',
}));
