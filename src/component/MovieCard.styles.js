import { styled } from '@mui/material/styles';

export const MovieCardWrapper = styled('div')({
    width: '240px',
    height: '380px',
    backgroundColor: '#1e1e1e',
    borderRadius: '8px',
    overflow: 'hidden',
    flex: '0 0 auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    fontSize: '1rem',

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
