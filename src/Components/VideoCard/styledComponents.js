import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardItem = styled.li`
  list-style: none;
  width: 100%;
  max-width: 320px;
  flex: 1 1 250px;
  max-width: 400px;
  @media (max-width: 576px) {
    max-width: 100%;
  }
`

export const VideoCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  padding: 12px 0;
  gap: 12px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const VideoTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  color: ${props => props.theme.text};
  line-height: 1.4;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: ${props => props.theme.text};
  margin: 0;
`

export const VideoMetaData = styled.div`
  display: flex;
  gap: 6px;
  font-size: 13px;
  color: ${props => props.theme.text};

  p:not(:last-child)::after {
    content: '•';
    margin-left: 6px;
  }
`

export const ViewsCount = styled.p`
  margin: 0;
`

export const PublishedDate = styled.p`
  margin: 0;
`
