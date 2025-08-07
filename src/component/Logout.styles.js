import styled from 'styled-components';
import { Typography, Box, Button, IconButton } from '@mui/material';

export const StyledBox = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const StyledImage = styled.img`
  width: 400px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const StyledTitle = styled(Typography)`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  color: #e1e6f0;
  margin-top: 16px;
`;

export const StyledSubtitle = styled(Typography)`
  font-size: 1.2rem;
  text-align: center;
  color: #8f98b2;
  margin-top: 8px;
  margin-bottom: 32px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const StyledCloseIcon = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 15px;
  color: #707a94;
`;

export const CancelButton = styled(Button)`
  text-transform: none;
  width: 275px;
  height: 60px;
  padding: 12px;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 8px;
  color: #e1e6f0;
  background: #252833;

`;

export const LogoutButton = styled(Button)`
  text-transform: none;
  width: 275px;
  height: 60px;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 12px;
  border-radius: 8px;
  color: #ffffff;
  background: linear-gradient(92.7deg, #1492ff 0%, #0860c4 50%, #eb0066 100%);

`;
