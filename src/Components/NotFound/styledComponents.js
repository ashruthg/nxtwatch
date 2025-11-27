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

export const NotFoundContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
`

export const NotFoundImage = styled.img`
  width: 260px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 380px;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin: 10px 0;
`

export const NotFoundParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  text-align: center;
  max-width: 400px;
`
