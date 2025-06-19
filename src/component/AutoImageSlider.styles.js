import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const SliderWrapper = styled(Box)({
  position: 'relative',
  left: '110px', 
  width: 'calc(100vw - 90px)',
  maxWidth: '100%',
  height: 'auto',
  overflow: 'hidden',
  zIndex: 1000,
  borderRadius:'8px'
});

export const SlideContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '80vh',
  backgroundColor: 'black',
});

export const SlideImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 1s ease-in-out',
});
