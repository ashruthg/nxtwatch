import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.bgPrimary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const LogoImage = styled.img`
  height: 30px;
  width: auto;

  @media screen and (min-width: 768px) {
    height: 35px;
  }
`

export const UserActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`

export const ThemeToggleButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${props => props.theme.text};
  font-size: 24px;
  display: flex;
  align-items: center;
  padding: 5px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const ProfileButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
  }
`

export const ProfileIcon = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
`

export const LogoutButton = styled.button`
  @media screen and (min-width: 768px) {
    display: block;
    padding: 8px 16px;
    border: 2px solid ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
    background-color: transparent;
    color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
      color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`

export const MenuButton = styled.button`
  display: block;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.theme.text};
  border: none;
  font-size: 24px;
  padding: 5px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutMobileBtn = styled.button`
  display: block;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.theme.text};
  border: none;
  font-size: 24px;
  padding: 5px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
`

export const PopupContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 576px) {
    padding: 30px 20px;
    gap: 24px;
  }
`

export const PopupText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f9f9f9' : '#00306e')};
  margin: 0;
  text-align: center;

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const PopupButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`

export const CancelButton = styled.button`
  padding: 10px 24px;
  border: 1px solid #94a3b8;
  background-color: transparent;
  color: #94a3b8;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f1f5f9;
  }
`

export const ConfirmButton = styled.button`
  padding: 10px 24px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`

// Mobile Menu Styled Components

export const MobileMenuPopup = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  display: flex;
  align-items: center;
  padding: 5px;
  
  &:hover {
    opacity: 0.7;
  }
`

export const MobileMenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  flex: 1;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 30px;
  gap: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => (props.isDark ? '#383838' : '#f1f5f9')};
  }
`

export const NavIcon = styled.div`
  font-size: 20px;
  color: ${props => (props.isDark ? '#909090' : '#475569')};
  display: flex;
  align-items: center;
`

export const NavText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`