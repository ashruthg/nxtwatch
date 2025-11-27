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

export const TrendingContainer = styled.main`
  flex: 1;
  overflow-y: auto;
  background-color: ${props => props.theme.bgPrimary};
`

export const TrendingVideosSection = styled.div`
  padding: 20px;

  @media (max-width: 576px) {
    padding: 12px;
  }
`

export const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 30px 40px;
  background-color: ${props => props.theme.headerBg};
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 20px 30px;
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    padding: 16px 20px;
    gap: 12px;
  }
`

export const TrendingIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.theme.iconBg};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 32px;
    color: #ff0b37;
  }

  @media (max-width: 576px) {
    width: 50px;
    height: 50px;

    svg {
      font-size: 26px;
    }
  }
`

export const TrendingHeading = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme.text};

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 576px) {
    font-size: 22px;
  }
`

export const TrendsListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  min-height: 400px;

  img {
    width: 300px;
    max-width: 100%;
    margin-bottom: 24px;
  }

  h1 {
    font-size: 24px;
    color: ${props => props.theme.text};
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    color: ${props => props.theme.textSecondary};
    margin-bottom: 24px;
    max-width: 500px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`
