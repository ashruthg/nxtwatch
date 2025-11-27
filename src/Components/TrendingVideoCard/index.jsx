import {ThemeProvider} from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import {darkTheme, lightTheme} from '../../style/theme'

import {
  TrendingCard,
  TrendingLink,
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

const TrendingVideoCard = props => {
  const {trendingVideo} = props

  const {
    id,
    title,
    thumbnail_url: thumbnailUrl,
    channel,
    view_count: viewCount,
    published_at: publishedAt,
  } = trendingVideo

  const {name, profile_image_url: profileImageUrl} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <TrendingCard>
              <TrendingLink to={`/videos/${id}`}>
                <ThumbnailContainer>
                  <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                </ThumbnailContainer>

                <VideoDetailsContainer>
                  <ChannelLogo src={profileImageUrl} alt={name} />

                  <VideoInfo>
                    <VideoTitle>{title}</VideoTitle>
                    <ChannelName>{name}</ChannelName>

                    <VideoMeta>
                      <ViewCount>{viewCount} views</ViewCount>
                      <PublishedDate>{publishedAt}</PublishedDate>
                    </VideoMeta>
                  </VideoInfo>
                </VideoDetailsContainer>
              </TrendingLink>
            </TrendingCard>
          </ThemeProvider>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoCard
