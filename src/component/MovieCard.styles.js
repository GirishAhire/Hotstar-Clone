import { styled } from '@mui/material/styles';

export const MovieCardWrapper = styled('div')({
    width: '240px',
    height: '380px',
    position: 'relative',
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
});

export const MovieImage = styled('img', {
    shouldForwardProp: (prop) => prop !== 'loaded',
})(({ loaded }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.3s ease',
    opacity: loaded ? 1 : 0,
}));
