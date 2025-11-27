import {ThemeProvider} from 'styled-components'
import {IoMdHome} from 'react-icons/io'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import ThemeContext from '../../context/ThemeContext'
import {darkTheme, lightTheme} from '../../style/theme'
import {
  SidebarContainer,
  NavList,
  NavItem,
  StyledLink,
  MenuItem,
  NavText,
  SidebarFooter,
  ContactSection,
  ContactHeading,
  SocialLinks,
  SocialLink,
  SocialIcon,
  MessageSection,
  MessageText,
} from './styledComponents'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <SidebarContainer>
            <NavList>
              <NavItem>
                <StyledLink to="/">
                  <MenuItem>
                    <IoMdHome />
                    <NavText> Home </NavText>
                  </MenuItem>
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/trending">
                  <MenuItem>
                    <AiFillFire />
                    <NavText> Trending </NavText>
                  </MenuItem>
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/gaming">
                  <MenuItem>
                    <SiYoutubegaming />
                    <NavText> Gaming </NavText>
                  </MenuItem>
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/saved-videos">
                  <MenuItem>
                    <RiPlayListAddFill />
                    <NavText> Saved videos </NavText>
                  </MenuItem>
                </StyledLink>
              </NavItem>
            </NavList>

            <SidebarFooter>
              <ContactSection>
                <ContactHeading> CONTACT US </ContactHeading>
                <SocialLinks>
                  <SocialLink>
                    <SocialIcon
                      alt="facebook logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    />
                    <SocialIcon
                      alt="twitter logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    />
                    <SocialIcon
                      alt="linked in logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    />
                  </SocialLink>
                </SocialLinks>
              </ContactSection>

              <MessageSection>
                <MessageText>
                  Enjoy! Now to see your channels and recommendations!
                </MessageText>
              </MessageSection>
            </SidebarFooter>
          </SidebarContainer>
        </ThemeProvider>
      )
    }}
  </ThemeContext.Consumer>
)

export default Sidebar
