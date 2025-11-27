import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {ThemeProvider} from 'styled-components'

import Header from '../Header'
import Sidebar from '../Sidebar'
import LoaderEl from '../Loader'

import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'
import {darkTheme, lightTheme} from '../../style/theme'

import {
  Layout,
  MainContainer,
  VideoItemDetailsContainer,
  VideoPlayer,
  VideoDetailsSection,
  VideoTitle,
  VideoStats,
  ViewsAndDate,
  ActionButtons,
  ActionButton,
  ChannelInfo,
  ChannelLogo,
  ChannelDetails,
  ChannelName,
  SubscriberCount,
  VideoDescription,
  FailureContainer,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoData: null,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {id} = match.params

    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')

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
        videoData: data.video_details,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  handleLike = () => {
    this.setState(prev => ({
      isLiked: !prev.isLiked,
      isDisliked: false,
    }))
  }

  handleDislike = () => {
    this.setState(prev => ({
      isDisliked: !prev.isDisliked,
      isLiked: false,
    }))
  }

  // ---------------------- LOADING ---------------------
  renderLoadingView = () => <LoaderEl />

  // ---------------------- SUCCESS ---------------------
  renderSuccessView = () => {
    const {videoData, isLiked, isDisliked} = this.state

    const {
      id,
      title,
      video_url: videoUrl,
      channel,
      view_count: viewCount,
      published_at: publishedAt,
      description,
    } = videoData

    const {
      name,
      profile_image_url: profileImageUrl,
      subscriber_count: subscriberCount,
    } = channel

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {savedVideos, toggleVideo} = value

          const isSaved = savedVideos.some(each => each.id === id)

          return (
            <>
              <VideoPlayer>
                <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
              </VideoPlayer>

              <VideoDetailsSection>
                <VideoTitle>{title}</VideoTitle>

                <VideoStats>
                  <ViewsAndDate>
                    <p>{viewCount} views</p>
                    <p>{publishedAt}</p>
                  </ViewsAndDate>

                  <ActionButtons>
                    <ActionButton active={isLiked} onClick={this.handleLike}>
                      <AiOutlineLike />
                      Like
                    </ActionButton>

                    <ActionButton active={isDisliked} onClick={this.handleDislike}>
                      <AiOutlineDislike />
                      Dislike
                    </ActionButton>

                    <ActionButton
                      active={isSaved}
                      onClick={() => toggleVideo(videoData)}
                    >
                      <BiListPlus />
                      {isSaved ? 'Saved' : 'Save'}
                    </ActionButton>
                  </ActionButtons>
                </VideoStats>

                <ChannelInfo>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <ChannelDetails>
                    <ChannelName>{name}</ChannelName>
                    <SubscriberCount>{subscriberCount} subscribers</SubscriberCount>
                  </ChannelDetails>
                </ChannelInfo>

                <VideoDescription>{description}</VideoDescription>
              </VideoDetailsSection>
            </>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  // ---------------------- FAILURE ---------------------
  renderFailureView = () => {
    const {isDark} = this.context

    const failureImg = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureContainer>
        <img alt="failure view" src={failureImg} />
        <h1>Oops! Something Went Wrong</h1>
        <p>We are having some trouble to complete your request. Please try again.</p>
        <RetryButton onClick={this.getVideoData}>Retry</RetryButton>
      </FailureContainer>
    )
  }

  renderVideoItemDetails = () => {
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
            <VideoItemDetailsContainer>
              {this.renderVideoItemDetails()}
            </VideoItemDetailsContainer>
          </MainContainer>
        </Layout>
      </ThemeProvider>
    )
  }
}

VideoItemDetails.contextType = ThemeContext

export default VideoItemDetails
