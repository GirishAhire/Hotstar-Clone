import { styled } from '@mui/material/styles';
import { Box, CircularProgress } from '@mui/material';

export const LoaderWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',
});

export const StyledCircularProgress = styled(CircularProgress)({
    '& .MuiCircularProgress-circle': {
        stroke: 'url(#gradient)',
    },
});
