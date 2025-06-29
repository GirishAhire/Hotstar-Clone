import React from 'react';

import Header from '../component/MySpace_Header';
import CenterSection from '../component/MySpace_CenterSection';
import { MySpaceWrapper } from './MySpace.styles';

function MySpace() {

    return (
            <MySpaceWrapper>
                <Header />
                <CenterSection />
            </MySpaceWrapper>
    );
}

export default MySpace;
