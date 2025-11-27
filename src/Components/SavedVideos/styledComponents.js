import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

export const SavedVideosContainer = styled.main`
  flex: 1;
  overflow-y: auto;
  background-color: ${props => props.theme.bgSecondary};
`

export const SavedVideosSection = styled.div``

export const SavedVideosHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 30px 40px;
  background-color: ${props => props.theme.headerBg};

  @media (max-width: 768px) {
    padding: 20px 30px;
  }

  @media (max-width: 576px) {
    padding: 20px;
    gap: 12px;
  }
`

export const SavedVideosIconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${props => props.theme.iconBg};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 35px;
    color: #ff0000;
  }

  @media (max-width: 576px) {
    width: 60px;
    height: 60px;

    svg {
      font-size: 30px;
    }
  }
`

export const SavedVideosHeading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme.text};

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
`

export const SavedVideosList = styled.ul`
  list-style: none;
  padding: 30px 40px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }

  @media (max-width: 576px) {
    padding: 16px;
    gap: 16px;
  }
`

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 40px 20px;
  text-align: center;
`

export const NoSavedVideosImage = styled.img`
  width: 350px;
  max-width: 100%;
  margin-bottom: 32px;

  @media (max-width: 576px) {
    width: 280px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.text};
  margin: 0 0 12px 0;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`

export const NoSavedVideosDescription = styled.p`
  font-size: 16px;
  color: ${props => props.theme.text};
  margin: 0;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`
