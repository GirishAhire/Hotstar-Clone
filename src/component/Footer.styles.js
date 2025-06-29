import { styled } from '@mui/material/styles';

export const FooterWrapper = styled('footer')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    backgroundColor: '#0f1014',
    color: '#ffff',
    marginTop: '140px',

    [theme.breakpoints.up('md')]: {
        marginLeft: '150px',
        padding: '40px 40px',
        textAlign: 'left',
        alignItems: 'flex-start',
    },

    [theme.breakpoints.down('md')]: {
        marginLeft: 0,
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px 20px',
    },
}));


export const FooterColumn = styled('div')(({ theme }) => ({
    flex: '1 1 200px',

    [theme.breakpoints.down('md')]: {
    },
}));

export const FooterTitle = styled('h3')(({ $center }) => ({
    fontSize: '22px',
    fontWeight: 500,
    color: 'white',
    marginBottom: '20px',
    textAlign: $center ? 'center' : 'left',
}));

export const FooterLink = styled('a')({
    fontSize: '20px',
    fontWeight: 400,
    display: 'block',
    color: '#8F98B2',
    textDecoration: 'none',
    lineHeight: 2.6,
    transition: 'color 0.3s',
    '&:hover': {
        color: '#ffffff',
    },
});

export const FooterParagraph = styled('p')({
    fontSize: '18px',
    fontWeight: 500,
    color: '#8F98B2',
    marginTop: '20px',
});

export const FooterBottomText = styled('p')({
    color: '#8F98B2',
    fontSize: '18px',
    fontWeight: 500,
});

export const FooterIcons = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '40px',
    fontSize: '40px',
    margin: '10px 0 10px 120px',
    justifyContent: 'flex-start',

    '& svg': {
        cursor: 'pointer',
        color: '#fff',
        transition: 'color 0.3s',
        '&:hover': {
            color: '#1da1f2',
        },
    },

    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        margin: '10px 0',
    },
}));

export const FooterImageWrapper = styled('div')({
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center',
});

export const FooterImage = styled('img')(({ theme }) => ({
    width: '280px',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
        width: '200px',
    },
}));
