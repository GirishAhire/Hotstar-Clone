import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

// export const SearchContainer = styled('div')({
//     padding: '50px',
//     paddingLeft: '80px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 'auto',
//     height: '10vh',
//     // backgroundColor: '#0f1014',
// });

export const SearchContainer = styled('div')({
    padding: '20px 80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    maxWidth: '90%',
    height: 'auto',
});


export const StyledTextField = styled(TextField)({
    caretColor: '#1492ff',
    '& .MuiInputBase-root': {
        color: '#fff',
        backgroundColor: '#252833',
        fontSize: '1.6rem',
        fontFamily: 'Inter',
        borderRadius: 8,
        paddingLeft: '25px',

    },
    '& .MuiOutlinedInput-notchedOutline': {
        // borderColor: '#3c3f44',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        // borderColor: '#ffffff',
    },
    '& .MuiInputLabel-root': {
        color: '#aaa',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#fff',
    },
});

export const InputAdornmentStyle = styled(InputAdornment)({
    font: '1rem',
    color: '#fff',
});
