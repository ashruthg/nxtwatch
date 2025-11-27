import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingCard = styled.li`
  list-style: none;

  flex: 1 1 250px;
  max-width: 100%;

  @media (max-width: 576px) {
    flex: 1 1 calc(50% - 8px);
    max-width: calc(50% - 8px);
  }

  @media (min-width: 577px) and (max-width: 768px) {
    flex: 1 1 calc(33.333% - 16px);
    max-width: calc(33.333% - 16px);
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    flex: 1 1 calc(25% - 18px);
    max-width: calc(25% - 18px);
  }

  @media (min-width: 1201px) {
    flex: 1 1 calc(20% - 20px);
    max-width: calc(20% - 20px);
  }
`

export const GamingLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 576px) {
    height: 180px;
  }
`

export const VideoInfo = styled.div`
  padding: 12px 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  color: ${props => props.theme.text};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`

export const ViewCount = styled.p`
  font-size: 14px;
  color: ${props => props.theme.text};
  margin: 0;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: ${props => props.theme.text};
  margin: 0;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`
