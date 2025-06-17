import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const HelpButton = styled(Button)({
    fontFamily: 'sans-serif',
    fontSize: '1.2rem',
    position: 'absolute',
    top: 16,
    right: 16,
    fontWeight: 500,
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF14',
    padding: '15px 30px',
    borderRadius: '8px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
});

export const ButtonTextWrapper = styled('span')({
    userSelect: 'text',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
});
