import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => props.theme.background};
`

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

export const VideoItemDetailsContainer = styled.main`
  flex: 1;
  overflow-y: auto;
  background-color: ${props => props.theme.background};
`

export const VideoPlayer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #000;

  iframe {
    width: 100%;
    height: 500px;
    border: none;

    @media (max-width: 768px) {
      height: 300px;
    }
  }
`

export const VideoDetailsSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${props => props.theme.bgPrimary};
`

export const VideoTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 0 16px 0;
  color: ${props => props.theme.text};
`

export const VideoStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme.border};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`

export const ViewsAndDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${props => props.theme.text};

  p:not(:last-child)::after {
    content: '•';
    margin-left: 8px;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  font-size: 14px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;

  &:hover {
    background-color: ${props => props.theme.hoverBg};
  }

  svg {
    font-size: 20px;
  }
`

export const ChannelInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme.border};
  margin-bottom: 16px;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`

export const ChannelDetails = styled.div`
  flex: 1;
`

export const ChannelName = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 4px 0;
  color: ${props => props.theme.text};
`

export const SubscriberCount = styled.p`
  font-size: 13px;
  color: ${props => props.theme.text};
  margin: 0;
`

export const VideoDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${props => props.theme.text};
  margin: 0;
  white-space: pre-wrap;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  min-height: 400px;

  img {
    width: 300px;
    margin-bottom: 24px;
  }

  h1 {
    font-size: 24px;
    color: ${props => props.theme.text};
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    color: ${props => props.theme.textSecondary};
    margin-bottom: 24px;
    max-width: 500px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #4338ca;
  }
`
