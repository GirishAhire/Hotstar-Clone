import React from 'react';
import logoutImage from '../assets/Logout.png';
import {
    StyledBox,
    StyledImage,
    StyledTitle,
    StyledSubtitle,
    ButtonGroup,
    CancelButton,
    LogoutButton
} from './Logout.styles';

function Logout({ onCancel, onLogout }) {
    return (
        <StyledBox>
            <StyledImage src={logoutImage} alt="Logout Illustration" />
            <StyledTitle>Are you sure you want to log out?</StyledTitle>
            <StyledSubtitle>You will need to log in again to watch your favourites.</StyledSubtitle>
            <ButtonGroup>
                <CancelButton onClick={onCancel}>Cancel</CancelButton>
                <LogoutButton onClick={onLogout}>Log Out</LogoutButton>
            </ButtonGroup>
        </StyledBox>
    );
}

export default Logout;
