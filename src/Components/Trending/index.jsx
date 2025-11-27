import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiFillFire} from 'react-icons/ai'
import {ThemeProvider} from 'styled-components'

import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideoCard from '../TrendingVideoCard'
import LoaderEl from '../Loader'

import ThemeContext from '../../context/ThemeContext'
import {darkTheme, lightTheme} from '../../style/theme'

import {
  Layout,
  MainContainer,
  TrendingContainer,
  TrendingVideosSection,
  TrendingHeader,
  TrendingIcon,
  TrendingHeading,
  TrendsListContainer,
  FailureContainer,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      this.setState({
        trendingVideos: videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => <LoaderEl />

  renderSuccessView = () => {
    const {trendingVideos} = this.state

    return (
      <TrendingVideosSection>
        <TrendingHeader>
          <TrendingIcon>
            <AiFillFire />
          </TrendingIcon>
          <TrendingHeading>Trending</TrendingHeading>
        </TrendingHeader>

        <TrendsListContainer>
          {trendingVideos.map(each => (
            <TrendingVideoCard key={each.id} trendingVideo={each} />
          ))}
        </TrendsListContainer>
      </TrendingVideosSection>
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
        <p>We are having some trouble to complete your request. Please try again.</p>
        <RetryButton onClick={this.getTrendingVideos}>Retry</RetryButton>
      </FailureContainer>
    )
  }

  renderTrending = () => {
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
            <TrendingContainer>{this.renderTrending()}</TrendingContainer>
          </MainContainer>
        </Layout>
      </ThemeProvider>
    )
  }
}

Trending.contextType = ThemeContext

export default Trending
