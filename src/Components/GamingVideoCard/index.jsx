import {
  GamingCard,
  GamingLink,
  ThumbnailImg,
  VideoInfo,
  VideoTitle,
  ViewCount,
  ChannelName,
} from './styledComponents'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnail_url: thumbnailUrl,
    view_count: viewCount,
  } = videoDetails

  return (
    <GamingCard>
      <GamingLink to={`/videos/${id}`}>
        <ThumbnailImg alt="video thumbnail" src={thumbnailUrl} />
        <VideoInfo>
          <VideoTitle>{title}</VideoTitle>
          <ViewCount>{viewCount} Watching</ViewCount>
          <ChannelName>Worldwide</ChannelName>
        </VideoInfo>
      </GamingLink>
    </GamingCard>
  )
}

export default GamingVideoCard
