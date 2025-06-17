import React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { HelpButton, ButtonTextWrapper } from './MySpace_Header.styles';

function MySpace_Header() {
    return (
        <HelpButton>
            <span className="flex items-center" style={{ userSelect: 'text' }}>
                <ButtonTextWrapper>
                    <HelpOutlineIcon />
                    Help & Support
                </ButtonTextWrapper>
            </span>
        </HelpButton>
    );
}

export default MySpace_Header;
