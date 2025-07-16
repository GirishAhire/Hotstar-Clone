import React, { useState } from 'react';
import {
    InputAdornment,
    Stack,
    IconButton,
    Typography
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

function SignupSection({ handleClose, switchToLogin }) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((prev) => !prev);

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validateForm = () => {
        let usernameError = '';
        let emailError = '';
        let passwordError = '';

        if (!userData.username.trim()) {
            usernameError = 'Username is required';
        }

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

        setErrors({ username: usernameError, email: emailError, password: passwordError });

        return !usernameError && !emailError && !passwordError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Account created! You can now log in.');
        switchToLogin();
    };

    return (
        <>
            <StyledCloseIcon onClick={handleClose}>
                <CloseIcon sx={{ fontSize: '2.5rem' }} />
            </StyledCloseIcon>

            <StyledTitle variant="h5">Create your account</StyledTitle>

            <StyledSubtitle variant="body1">Sign up with your email to start watching</StyledSubtitle>

            <StyledBox>
                <form onSubmit={handleSubmit}>
                    <Stack direction="column" spacing={2}>
                        <StyledTextField
                            name="username"
                            label="Enter your username"
                            variant="outlined"
                            value={userData.username}
                            onChange={handleChange}
                            error={!!errors.username}
                            helperText={errors.username}
                        />

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
                            Sign Up
                        </StyledSubmitButton>
                    </Stack>
                </form>

                <Typography variant="body2" sx={{ color: '#8F98B2', marginTop: '20px' }}>
                    Already have an account?{' '}
                    <span
                        style={{ color: '#fff', cursor: 'pointer', fontWeight: 500 }}
                        onClick={switchToLogin}
                    >
                        Log in
                    </span>
                </Typography>
            </StyledBox>
        </>
    );
}

export default SignupSection;
