import React, { useState } from 'react';

import {
    InputAdornment,
    Stack,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import {
    StyledBox,
    StyledCloseIcon,
    StyledTitle,
    StyledSubtitle,
    StyledTextField,
    StyledSubmitButton
} from './LoginSection.styles';

function LoginSection({ handleClose }) {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((prev) => !prev);

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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
            // handle login success logic here
        }
    };

    return (

        <StyledBox>

            <StyledCloseIcon onClick={handleClose}>
                <CloseIcon sx={{ fontSize: '2.5rem' }} />
            </StyledCloseIcon>

            <StyledTitle variant="h5">
                Login or sign up to continue
            </StyledTitle>

            <StyledSubtitle variant="body1">
                Enter your email to login
            </StyledSubtitle>

            <form onSubmit={handleSubmit}>
                
                <Stack direction="column" spacing={2}>
                    <StyledTextField
                        name="email"
                        label="Enter your email"
                        variant="outlined"
                        value={userData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />

                    <StyledTextField
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
                    />

                    <StyledSubmitButton type="submit" variant="contained">
                        Submit
                    </StyledSubmitButton>
                </Stack>
            </form>
        </StyledBox>
    );
}

export default LoginSection;
