import {
  VideoCardItem,
  VideoCardLink,
  ThumbnailImage,
  VideoDetailsContainer,
  ChannelLogo,
  VideoInfo,
  VideoTitle,
  ChannelName,
  VideoMetaData,
  ViewsCount,
  PublishedDate,
} from './styledComponents'

const VideoCard = props => {
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
    <VideoCardItem>
      <VideoCardLink to={`/videos/${id}`}>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />

        <VideoDetailsContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />

          <VideoInfo>
            <VideoTitle>{title}</VideoTitle>
            <ChannelName>{name}</ChannelName>

            <VideoMetaData>
              <ViewsCount>{viewCount} views</ViewsCount>
              <PublishedDate>{publishedAt}</PublishedDate>
            </VideoMetaData>
          </VideoInfo>
        </VideoDetailsContainer>
      </VideoCardLink>
    </VideoCardItem>
  )
}

export default VideoCard
