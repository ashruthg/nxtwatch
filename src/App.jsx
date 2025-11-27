import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'
import Login from './Components/Login'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Gaming from './Components/Gaming'
import SavedVideos from './Components/SavedVideos'
import VideoItemDetails from './Components/VideoItemDetails'
import NotFound from './Components/NotFound'
import ThemeContext from './context/ThemeContext'
import SavedVideosContext from './context/SavedVideosContext'
import './App.css'

class App extends Component {
  state = {
    isDark: false,
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  toggleSavedVideo = videoDetails => {
    const {savedVideos} = this.state
    const videoExists = savedVideos.some(
      eachSavedVideo => eachSavedVideo.id === videoDetails.id,
    )
    if (videoExists) {
      const updatedSavedVideos = savedVideos.filter(
        eachSavedVideo => eachSavedVideo.id !== videoDetails.id,
      )
      this.setState({savedVideos: updatedSavedVideos})
    } else {
      const updatedSavedVideos = [...savedVideos, videoDetails]
      this.setState({savedVideos: updatedSavedVideos})
    }
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <ThemeContext.Provider value={{isDark, toggleTheme: this.toggleTheme}}>
        <SavedVideosContext.Provider
          value={{savedVideos, toggleVideo: this.toggleSavedVideo}}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </SavedVideosContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
