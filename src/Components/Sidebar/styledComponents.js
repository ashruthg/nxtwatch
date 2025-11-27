import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  height: 100%;
  width: 200px;
  background-color: ${props => props.theme.bgPrimary};
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
`

export const NavItem = styled.li``

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  color: ${props => props.theme.text};
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.hoverBg};
  }
`

export const NavText = styled.p`
  color: ${props => props.theme.text};
  margin: 0;
`

export const SidebarFooter = styled.div`
  padding: 20px;
`

export const ContactSection = styled.div``

export const ContactHeading = styled.p`
  color: ${props => props.theme.text};
  font-size: 14px;
  margin-bottom: 12px;
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SocialLink = styled.div`
  display: flex;
  gap: 10px;
`

export const SocialIcon = styled.img`
  width: 35px;
  height: 35px;
`

export const MessageSection = styled.div`
  margin-top: 20px;
`

export const MessageText = styled.p`
  color: ${props => props.theme.text};
  font-size: 14px;
`
