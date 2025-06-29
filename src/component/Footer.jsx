import {
    FooterWrapper,
    FooterColumn,
    FooterTitle,
    FooterLink,
    FooterParagraph,
    FooterBottomText,
    FooterIcons,
    FooterImageWrapper,
    FooterImage,
} from './Footer.styles';

import footerIcon from '../assets/myspace/footer_icon.png';

import { FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <FooterWrapper>
            <FooterColumn>
                <FooterTitle>Company</FooterTitle>
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterParagraph>&copy; 2023 STAR. All rights reserved.</FooterParagraph>
                <FooterBottomText>
                    Terms of Use &nbsp;  &nbsp; Privacy Policy &nbsp;  &nbsp; FAQ
                </FooterBottomText>
            </FooterColumn>

            <FooterColumn>
                <FooterTitle>View Website In</FooterTitle>
                <FooterLink href="#">English</FooterLink>
            </FooterColumn>

            <FooterColumn>
                <FooterTitle>Need Help?</FooterTitle>
                <FooterLink href="#">Visit Help Center</FooterLink>
                <FooterLink href="#">Share Feedback</FooterLink>
            </FooterColumn>

            <FooterColumn>
                <FooterTitle $center>Connect With Us</FooterTitle>
                <FooterIcons>
                    <FaFacebook />
                    <FaTwitter />
                </FooterIcons>
                <FooterImageWrapper>
                    <FooterImage src={footerIcon} alt="Download our app" />
                </FooterImageWrapper>
            </FooterColumn>
        </FooterWrapper>
    );
}

export default Footer;
