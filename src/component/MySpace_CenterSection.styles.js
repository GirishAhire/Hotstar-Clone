import styled from '@emotion/styled';
import { Button, Box } from '@mui/material';

export const StyledImage = styled('img')({
    width: '425px',
    height: '170px',
    borderRadius: '6px',
    objectFit: 'cover',
});

export const Title = styled('p')({
    fontSize: '28px',
    fontWeight: 700,
    color: '#E1E6F0',
    lineHeight: 1.4,
    margin: 0,
});

export const Description = styled('p')({
    fontFamily: 'sans-serif',
    fontSize: '22px',
    fontWeight: 100,
    color: '#8F98B2',
    lineHeight: 1.6,
    // maxWidth: '500px',
    marginRight: '100px',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    margin: 0,
});

export const LoginButton = styled(Button)({
    background: 'linear-gradient(92.7deg, #1492ff 0%, #0860c4 50%, #eb0066 100%)',
    color: '#ffff',
    width: '240px',
    height: '55px',
    fontWeight: 600,
    fontSize: '1.3rem',
    padding: '12px 12px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'text',
    '&:hover': {
        background: 'linear-gradient(92.7deg, #1492ff 0%, #0860c4 50%, #eb0066 100%)',
        filter: 'brightness(1.1)',
    },
});

export const FlexSpan = styled('span')({
    display: 'flex',
    alignItems: 'center',
    userSelect: 'text',
});

export const TextSpan = styled('span')({
    userSelect: 'text',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textTransform: 'none',
});

export const StyledModalBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 951,
    height: 514,
    boxShadow: 24,
    padding: 32,
    borderRadius: 16,
    backgroundColor: '#16181f',
    outline: 'none',
});
