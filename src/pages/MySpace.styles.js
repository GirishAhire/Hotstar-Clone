import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const MySpaceWrapper = styled(Box)(({ theme }) => ({
    
    position: 'relative',
    minHeight: '75vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing(2),
    marginTop: '50px',
    marginRight: '40px',
}));
