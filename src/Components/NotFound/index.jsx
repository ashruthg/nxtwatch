import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  Layout,
  MainContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundParagraph,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      const imgUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <Layout>
          <Header />
          <MainContainer>
            <Sidebar />
            <NotFoundContainer isDark={isDark}>
              <NotFoundImage src={imgUrl} alt="not found" />
              <NotFoundHeading isDark={isDark}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundParagraph isDark={isDark}>
                We are sorry, the page you requested could not be found.
              </NotFoundParagraph>
            </NotFoundContainer>
          </MainContainer>
        </Layout>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
