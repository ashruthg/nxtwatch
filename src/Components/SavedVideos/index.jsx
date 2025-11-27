import {Component} from 'react'
import {ThemeProvider} from 'styled-components'
import {HiOutlineFire} from 'react-icons/hi'

import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedVideoCard from '../SavedVideoCard'

import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'

import {darkTheme, lightTheme} from '../../style/theme'

import {
  Layout,
  MainContainer,
  SavedVideosContainer,
  SavedVideosSection,
  SavedVideosHeader,
  SavedVideosIconContainer,
  SavedVideosHeading,
  SavedVideosList,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
} from './styledComponents'

class SavedVideos extends Component {
  renderEmptyVideosView = () => (
    <NoSavedVideosContainer>
      <NoSavedVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedVideosHeading>No saved videos found</NoSavedVideosHeading>
      <NoSavedVideosDescription>
        You can save your videos while watching them
      </NoSavedVideosDescription>
    </NoSavedVideosContainer>
  )

  renderSavedVideosView = savedVideos => (
    <SavedVideosSection>
      <SavedVideosHeader>
        <SavedVideosIconContainer>
          <HiOutlineFire />
        </SavedVideosIconContainer>
        <SavedVideosHeading>Saved Videos</SavedVideosHeading>
      </SavedVideosHeader>

      <SavedVideosList>
        {savedVideos.map(each => (
          <SavedVideoCard key={each.id} videoDetails={each} />
        ))}
      </SavedVideosList>
    </SavedVideosSection>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {themeValue => {
          const {isDark} = themeValue
          return (
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
              <Layout>
                <Header />
                <MainContainer>
                  <Sidebar />
                  <SavedVideosContainer>
                    <SavedVideosContext.Consumer>
                      {value => {
                        const {savedVideos} = value
                        return savedVideos.length !== 0
                          ? this.renderSavedVideosView(savedVideos)
                          : this.renderEmptyVideosView()
                      }}
                    </SavedVideosContext.Consumer>
                  </SavedVideosContainer>
                </MainContainer>
              </Layout>
            </ThemeProvider>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
