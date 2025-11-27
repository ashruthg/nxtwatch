import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {IoMoon} from 'react-icons/io5'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {MdHome} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from '../../style/theme'
import {
  HeaderContainer,
  LogoLink,
  LogoImage,
  UserActionsContainer,
  ThemeToggleButton,
  ProfileButton,
  ProfileIcon,
  LogoutButton,
  LogoutMobileBtn,
  MenuButton,
  PopupContainer,
  PopupContent,
  PopupText,
  PopupButtonsContainer,
  CancelButton,
  ConfirmButton,
  MobileMenuPopup,
  MobileMenuHeader,
  CloseButton,
  MobileMenuNav,
  NavLink,
  NavItem,
  NavIcon,
  NavText,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Header extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, toggleTheme} = value
          const websiteLogoImg = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const themeIcon = isDark ? <FiSun /> : <IoMoon />

          return (
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
              <HeaderContainer>
                <LogoLink to="/">
                  <LogoImage src={websiteLogoImg} alt="website logo" />
                </LogoLink>
                <UserActionsContainer>
                  <ThemeToggleButton data-testid="theme" onClick={toggleTheme}>
                    {themeIcon}
                  </ThemeToggleButton>
                  <ProfileButton>
                    <ProfileIcon
                      alt="profile"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    />
                  </ProfileButton>

                  {/* Mobile Menu Popup */}
                  <Popup
                    modal
                    trigger={
                      <MenuButton>
                        <AiOutlineMenu />
                      </MenuButton>
                    }
                    className="mobile-menu-popup"
                  >
                    {close => (
                      <MobileMenuPopup isDark={isDark}>
                        <MobileMenuHeader>
                          <CloseButton onClick={() => close()} isDark={isDark}>
                            <AiOutlineClose />
                          </CloseButton>
                        </MobileMenuHeader>
                        <MobileMenuNav>
                          <NavLink to="/" onClick={() => close()}>
                            <NavItem isDark={isDark}>
                              <NavIcon isDark={isDark}>
                                <MdHome />
                              </NavIcon>
                              <NavText isDark={isDark}>Home</NavText>
                            </NavItem>
                          </NavLink>
                          <NavLink to="/trending" onClick={() => close()}>
                            <NavItem isDark={isDark}>
                              <NavIcon isDark={isDark}>
                                <HiFire />
                              </NavIcon>
                              <NavText isDark={isDark}>Trending</NavText>
                            </NavItem>
                          </NavLink>
                          <NavLink to="/gaming" onClick={() => close()}>
                            <NavItem isDark={isDark}>
                              <NavIcon isDark={isDark}>
                                <SiYoutubegaming />
                              </NavIcon>
                              <NavText isDark={isDark}>Gaming</NavText>
                            </NavItem>
                          </NavLink>
                          <NavLink to="/saved-videos" onClick={() => close()}>
                            <NavItem isDark={isDark}>
                              <NavIcon isDark={isDark}>
                                <CgPlayListAdd />
                              </NavIcon>
                              <NavText isDark={isDark}>Saved videos</NavText>
                            </NavItem>
                          </NavLink>
                        </MobileMenuNav>
                      </MobileMenuPopup>
                    )}
                  </Popup>

                  {/* Desktop Logout */}
                  <Popup
                    modal
                    trigger={
                      <LogoutButton isDark={isDark}>Logout</LogoutButton>
                    }
                  >
                    {close => (
                      <PopupContainer isDark={isDark}>
                        <PopupContent>
                          <PopupText isDark={isDark}>
                            Are you sure, you want to logout
                          </PopupText>
                          <PopupButtonsContainer>
                            <CancelButton onClick={() => close()}>
                              Cancel
                            </CancelButton>
                            <ConfirmButton onClick={this.onClickLogout}>
                              Confirm
                            </ConfirmButton>
                          </PopupButtonsContainer>
                        </PopupContent>
                      </PopupContainer>
                    )}
                  </Popup>

                  {/* Mobile Logout */}
                  <Popup
                    modal
                    trigger={
                      <LogoutMobileBtn>
                        <FiLogOut />
                      </LogoutMobileBtn>
                    }
                  >
                    {close => (
                      <PopupContainer isDark={isDark}>
                        <PopupContent>
                          <PopupText isDark={isDark}>
                            Are you sure you want to logout?
                          </PopupText>
                          <PopupButtonsContainer>
                            <CancelButton onClick={() => close()}>
                              Cancel
                            </CancelButton>
                            <ConfirmButton onClick={this.onClickLogout}>
                              Confirm
                            </ConfirmButton>
                          </PopupButtonsContainer>
                        </PopupContent>
                      </PopupContainer>
                    )}
                  </Popup>
                </UserActionsContainer>
              </HeaderContainer>
            </ThemeProvider>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)