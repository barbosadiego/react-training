import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <ul>
        <li>
          <a href="http://www.facebook.com" target="_blank">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="http://www.twitter.com" target="_blank">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
