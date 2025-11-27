import {Component} from 'react'
import Cookies from 'js-cookie'
import {ThemeProvider} from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingVideoCard from '../GamingVideoCard'
import LoaderEl from '../Loader'

import {darkTheme, lightTheme} from '../../style/theme'
import {
  Layout,
  MainContainer,
  GamingContainer,
  GamingHeader,
  GamingIcon,
  GamingHeading,
  GamingVideosSection,
  FailureContainer,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      this.setState({
        gamingVideos: data.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => <LoaderEl />

  renderSuccessView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosSection>
        {gamingVideos.map(each => (
          <GamingVideoCard key={each.id} videoDetails={each} />
        ))}
      </GamingVideosSection>
    )
  }

  renderFailureView = () => {
    const {isDark} = this.context
    const failureImg = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureContainer>
        <img src={failureImg} alt="failure view" />
        <h1>Oops! Something Went Wrong</h1>
        <p>We are having some trouble. Please try again.</p>
        <RetryButton onClick={this.getGamingVideos}>Retry</RetryButton>
      </FailureContainer>
    )
  }

  renderGamingContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {isDark} = this.context

    return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Layout>
          <Header />
          <MainContainer>
            <Sidebar />

            <GamingContainer>
              <GamingHeader>
                <GamingIcon>
                  <SiYoutubegaming />
                </GamingIcon>
                <GamingHeading>Gaming</GamingHeading>
              </GamingHeader>

              {this.renderGamingContent()}
            </GamingContainer>
          </MainContainer>
        </Layout>
      </ThemeProvider>
    )
  }
}

Gaming.contextType = ThemeContext

export default Gaming
