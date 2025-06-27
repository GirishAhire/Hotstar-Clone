import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const SliderWrapper = styled(Box)({
  position: 'relative',
  left: '100px',
  width: 'calc(100vw - 90px)',
  maxWidth: '100%',
  height: 'auto',
  overflow: 'hidden',
  zIndex: 1000,
  borderRadius: '8px',

  '@media (max-width: 1024px)': {
    left: '80px',
  },

  '@media (max-width: 768px)': {
    left: '45px',
    width: '100%',
    padding: '0 1rem',
  },

  '@media (max-width: 480px)': {
    padding: '0 0.5rem',
  },
});

export const SlideContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '80vh',
  backgroundColor: 'black',
  borderRadius: '8px',

  '@media (max-width: 1024px)': {
    height: '60vh',
  },

  '@media (max-width: 768px)': {
    height: '45vh',
  },

  '@media (max-width: 480px)': {
    height: '35vh',
  },
});

export const SlideImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 1s ease-in-out',
  borderRadius: '8px',
});
