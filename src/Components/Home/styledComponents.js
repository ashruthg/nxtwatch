import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => props.theme.background};
`

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

export const HomeContainer = styled.main`
  flex: 1;
  overflow-y: auto;
  background-color: ${props => props.theme.bgPrimary};
  padding-bottom: 40px;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const BannerLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 60%;
`

export const BannerLogo = styled.img`
  width: 120px;
`

export const BannerText = styled.p`
  font-size: 16px;
  color: #1e293b;
  margin: 0;
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid #1e293b;
  color: #1e293b;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  align-self: flex-start;

  &:hover {
    background-color: rgba(30, 41, 59, 0.1);
  }
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  font-size: 16px;
  color: #1e293b;

  &:hover {
    opacity: 0.7;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  border: 1px solid ${props => (props.isDark ? '#383838' : '#cbd5e1')};
  border-radius: 4px;
  background-color: ${props => props.theme.bgSecondary};
  overflow: hidden;
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: transparent;
  color: ${props => props.theme.text};

  &::placeholder {
    color: ${props => (props.isDark ? '#909090' : '#64748b')};
  }
`

export const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.theme.bgPrimary === '#181818' ? '#383838' : '#e2e8f0'};
  border: none;
  border-left: 1px solid ${props => (props.theme.bgPrimary === '#181818' ? '#606060' : '#cbd5e1')};
  cursor: pointer;
  color: ${props => props.theme.text};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.bgPrimary === '#181818' ? '#4a4a4a' : '#cbd5e1'};
  }
`

export const VideoListContainer = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  color: ${props => props.theme.text};
  min-height: 400px;

  img {
    width: 300px;
    max-width: 100%;
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 8px;
    font-size: 24px;
  }

  p {
    margin-bottom: 20px;
    color: ${props => props.theme.textSecondary || props.theme.text};
    opacity: 0.8;
  }
`

export const RetryButton = styled.button`
  padding: 10px 24px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4338ca;
  }
`