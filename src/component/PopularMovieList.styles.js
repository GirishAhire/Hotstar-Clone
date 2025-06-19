import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')({
    position: 'relative',
    left: '90px',
    marginTop: '1.5rem',
    padding: '0 1.5rem',
    overflow: 'hidden',

    '@media (max-width: 1024px)': {
        left: '80px',
    },
    '@media (max-width: 768px)': {
        left: '0px',
        padding: '0 1rem',
    },
    '@media (max-width: 480px)': {
        padding: '0 0.5rem',
    },
});

export const Title = styled('h2')({
    color: 'white',
    marginBottom: '0.8rem',
    fontSize: '1.5rem',

    '@media (max-width: 768px)': {
        fontSize: '1.3rem',
    },
    '@media (max-width: 480px)': {
        fontSize: '1.1rem',
    },
});

export const ScrollContainer = styled('div')({
    display: 'flex',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    gap: '1rem',
    padding: '0.5rem 0',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
});

export const LeftScrollButton = styled('button')({
    position: 'absolute',
    top: '50%',
    left: '25px',
    transform: 'translateY(-50%)',
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#ffffff',
    border: 'none',
    padding: '0.4rem',
    cursor: 'pointer',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    '&:hover': {
        transform: 'translateY(-50%) scale(1.1)',
    },
    '@media (max-width: 480px)': {
        display: 'none',
    },
});

export const RightScrollButton = styled('button')({
    position: 'absolute',
    top: '50%',
    right: '80px',
    transform: 'translateY(-50%)',
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#ffffff',
    border: 'none',
    padding: '0.4rem',
    cursor: 'pointer',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    '&:hover': {
        transform: 'translateY(-50%) scale(1.1)',
    },
    '@media (max-width: 480px)': {
        display: 'none',
    },
});

export const MovieCard = styled('div')({
    width: '240px',
    height: '380px',
    backgroundColor: '#1e1e1e',
    borderRadius: '8px',
    overflow: 'hidden',
    flex: '0 0 auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',

    '@media (max-width: 1024px)': {
        width: '200px',
        height: '320px',
    },
    '@media (max-width: 768px)': {
        width: '170px',
        height: '270px',
    },
    '@media (max-width: 480px)': {
        width: '140px',
        height: '220px',
    },
});

export const MovieImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});
