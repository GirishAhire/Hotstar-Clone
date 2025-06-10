import { Box, Typography, IconButton, TextField, Stack, InputAdornment, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react';

function LoginSection({ handleClose }) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((prev) => !prev);


    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [errors, setErrors] = useState({ email: '', password: '' });


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validateForm = () => {
        let emailError = '';
        let passwordError = '';

        if (!userData.email) {
            emailError = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            emailError = 'Invalid email format';
        }

        if (!userData.password) {
            passwordError = 'Password is required';
        } else if (userData.password.length < 6) {
            passwordError = 'Password must be at least 6 characters';
        }

        setErrors({
            email: emailError,
            password: passwordError
        });

        return !emailError && !passwordError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', userData);
        }
    };

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '100%',
                paddingTop: 4,
                textAlign: 'center',
                px: 4,
            }}
        >
            <IconButton
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: '#707a94',
                }}
            >
                <CloseIcon sx={{ fontSize: '2.5rem' }} />
            </IconButton>

            <Typography variant="h5" sx={{ fontWeight: 600, color: '#E1E6F0', mt: 2 }}>
                Login or sign up to continue
            </Typography>

            <Typography variant="body1" sx={{ color: '#8F98B2', mt: 1, mb: 4 }}>
                Enter your email to login
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack direction="column" spacing={2} sx={{ mb: 2 }}>
                    <TextField
                        name="email"
                        label="Enter your email"
                        variant="outlined"
                        value={userData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={textFieldStyles}
                    />

                    <TextField
                        name="password"
                        label="Enter your password"
                        type={showPassword ? 'text' : 'password'}
                        variant="outlined"
                        value={userData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        sx={{ color: '#8F98B2' }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={textFieldStyles}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{

                            mt: 2,
                            color: '#fff',
                            width: '300px',
                            height: '45px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            padding: '12px 12px',
                            borderRadius: '8px',
                            background: 'linear-gradient(92.7deg, #1492ff 0%, #0860c4 50%, #eb0066 100%)',
                            '&:hover': {
                                background: 'linear-gradient(92.7deg, #1492ff 0%, #0860c4 50%, #eb0066 100%)',
                                filter: 'brightness(1.1)',
                            }
                        }}
                    >
                        Submit
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

const textFieldStyles = {
    fontFamily: 'sans-serif',
    width: '325px',
    backgroundColor: '#00000000',
    borderRadius: '8px',
    '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        '& fieldset': { borderColor: '#8F98B2' },
        '&:hover fieldset': { borderColor: '#8F98B2' },
        '&.Mui-focused fieldset': { borderColor: '#8F98B2' },
    },
    '& .MuiInputBase-input': {
        fontSize: '1.1rem', 
        color: '#E1E6F0',
    },
    '& .MuiInputLabel-root': {
        color: '#8F98A0',
        fontSize: '1.1rem',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#8F98B2',
    },
};


export default LoginSection;
