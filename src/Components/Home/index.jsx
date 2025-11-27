import {Component} from 'react'
import Cookies from 'js-cookie'
import {ThemeProvider} from 'styled-components'
import {IoMdClose} from 'react-icons/io'
import { IoSearch } from "react-icons/io5";
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import LoaderEl from '../Loader'
import ThemeContext from '../../context/ThemeContext'
import {darkTheme, lightTheme} from '../../style/theme'
import {
  Layout,
  MainContainer,
  HomeContainer,
  BannerContainer,
  BannerLeftContainer,
  BannerLogo,
  BannerText,
  BannerButton,
  CloseBtn,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideoListContainer,
  FailureContainer,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      this.setState({
        videosList: videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
      console.log('failure data:', await response.json())
    }
  }

  retry = () => {
    this.getVideos()
  }

  renderBanner = () => {
    const {showBanner} = this.state
    if (!showBanner) {
      return null
    }
    return (
      <BannerContainer data-testid="banner">
        <BannerLeftContainer>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
          <BannerButton>GET IT NOW</BannerButton>
        </BannerLeftContainer>
        <CloseBtn
          data-testid="close"
          onClick={() => this.setState({showBanner: false})}
        >
          <IoMdClose size={20} />
        </CloseBtn>
      </BannerContainer>
    )
  }

  renderVideosList = () => {
    const {videosList} = this.state
    return (
      <VideoListContainer>
        {videosList.map(eachVideo => (
          <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideoListContainer>
    )
  }

  renderFailureView = () => {
    const {isDark} = this.context
    const failureImg = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureContainer>
        <img alt="failure view" src={failureImg} />
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request. Please try again.
        </p>
        <RetryButton onClick={this.retry}>Retry</RetryButton>
      </FailureContainer>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderEl />
      case apiStatusConstants.success:
        return this.renderVideosList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideos()
  }

  onKeyDownSearch = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  render() {
    const {searchInput} = this.state
    const {isDark} = this.context
    return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Layout>
          <Header />
          <MainContainer>
            <Sidebar />
            <HomeContainer data-testid="home">
              {this.renderBanner()}

              <SearchContainer isDark={isDark}>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  isDark={isDark}
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                  onKeyDown={this.onKeyDownSearch}
                />
                <SearchButton
                  onClick={this.onClickSearch}
                  data-testid="searchButton"
                >
                  <IoSearch />
                </SearchButton>
              </SearchContainer>

              {this.renderVideos()}
            </HomeContainer>
          </MainContainer>
        </Layout>
      </ThemeProvider>
    )
  }
}

Home.contextType = ThemeContext

export default Home
