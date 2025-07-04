
import { styled } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

export const SearchContainer = styled('div')({
    padding: '20px 100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    maxWidth: '90%',
    height: '20vh',
});

export const StyledTextField = styled(TextField)({
    caretColor: '#1492ff',
    fontWeight: 400,

    '& .MuiInputBase-root': {
        color: '#e1e6f0',
        fontWeight: '400',
        backgroundColor: '#252833',
        fontSize: '1.6rem',
        fontFamily: 'Inter',
        borderRadius: 8,
        paddingLeft: '25px',
        transition: 'color 0.3s ease',
    },

    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },

    '& .MuiInputAdornment-root svg': {
        color: '#8f98b2',
        fontSize: '2.5rem',
        marginRight: '10px',
        transition: 'color 0.3s ease',
    },

    '& .MuiInputBase-root.Mui-focused .MuiInputAdornment-root svg': {
        color: '#fff',
    },

    '& .MuiInputLabel-root': {
        color: '#aaa',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#fff',
    },
});

export const InputAdornmentStyle = styled(InputAdornment)({});

export const ClearIconButton = styled(IconButton)({
    color: '#8f98b2',
    padding: 4,
    '&:hover': {
        color: '#fff',
    },
});
