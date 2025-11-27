import {ThemeProvider} from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import {darkTheme, lightTheme} from '../../style/theme'

import {
  SavedVideoCardItem,
  SavedVideoLink,
  ThumbnailContainer,
  ThumbnailImage,
  VideoDetailsContainer,
  ChannelLogo,
  VideoInfo,
  VideoTitle,
  ChannelName,
  VideoMeta,
  ViewCount,
  PublishedDate,
} from './styledComponents'

const SavedVideoCard = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    thumbnail_url: thumbnailUrl,
    channel,
    view_count: viewCount,
    published_at: publishedAt,
  } = videoDetails

  const {name, profile_image_url: profileImageUrl} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <SavedVideoCardItem>
              <SavedVideoLink to={`/videos/${id}`}>
                <ThumbnailContainer>
                  <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                </ThumbnailContainer>

                <VideoDetailsContainer>
                  <ChannelLogo src={profileImageUrl} alt={`${name} logo`} />

                  <VideoInfo>
                    <VideoTitle>{title}</VideoTitle>
                    <ChannelName>{name}</ChannelName>

                    <VideoMeta>
                      <ViewNumber>{viewCount} views</ViewNumber>
                      <PublishedDate>{publishedAt}</PublishedDate>
                    </VideoMeta>
                  </VideoInfo>
                </VideoDetailsContainer>
              </SavedVideoLink>
            </SavedVideoCardItem>
          </ThemeProvider>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoCard
