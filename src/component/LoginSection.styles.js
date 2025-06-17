import styled from 'styled-components';
import { IconButton, Typography, Box, TextField, Button } from '@mui/material';

export const StyledBox = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding-top: 32px; /* theme.spacing(4) = 32px */
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const StyledCloseIcon = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #707a94;
`;

export const StyledTitle = styled(Typography)`
  font-weight: 600;
  color: #e1e6f0;
  margin-top: 16px;
`;

export const StyledSubtitle = styled(Typography)`
  color: #8f98b2;
  margin-top: 8px;
  margin-bottom: 32px;
`;

export const StyledTextField = styled(TextField)`
  width: 325px;
  background-color: transparent;
  border-radius: 8px;

  .MuiOutlinedInput-root {
    border-radius: 8px;

    fieldset {
      border-color: #8f98b2;
    }

    &:hover fieldset {
      border-color: #8f98b2;
    }

    &.Mui-focused fieldset {
      border-color: #8f98b2;
    }
  }

  .MuiInputBase-input {
    font-size: 1.1rem;
    color: #e1e6f0;
  }

  .MuiInputLabel-root {
    color: #8f98a0;
    font-size: 1.1rem;
  }

  .MuiInputLabel-root.Mui-focused {
    color: #8f98b2;
  }
`;

export const StyledSubmitButton = styled(Button)`
  margin-top: 16px;
  width: 300px;
  height: 45px;
  font-weight: 600;
  font-size: 1rem;
  padding: 12px;
  border-radius: 8px;
  color: #ffffff;
  background: linear-gradient(92.7deg, #1492ff 0%, #0860c4 50%, #eb0066 100%);

  &:hover {
    background: linear-gradient(92.7deg, #1492ff 0%, #0860c4 50%, #eb0066 100%);
    filter: brightness(1.1);
  }
`;
