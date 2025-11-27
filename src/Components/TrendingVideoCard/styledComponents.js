import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingCard = styled.li`
  list-style: none;
  display: flex;
  gap: 16px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`

export const TrendingLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  gap: 16px;
  width: 100%;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`

export const ThumbnailContainer = styled.div`
  flex-shrink: 0;
  width: 320px;

  @media (max-width: 1024px) {
    width: 280px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    height: 200px;
  }
`

export const VideoDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 12px;
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;

  @media (min-width: 769px) {
    display: none;
  }
`

export const VideoInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  color: ${props => props.theme.text};

  @media (max-width: 576px) {
    font-size: 15px;
  }
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: ${props => props.theme.text};
  margin: 0;
  font-weight: 400;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`

export const VideoMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 14px;
  color: ${props => props.theme.text};

  @media (max-width: 576px) {
    font-size: 13px;
  }
`

export const ViewCount = styled.p`
  font-weight: 400;
`

export const PublishedDate = styled.p`
  font-weight: 400;
`
