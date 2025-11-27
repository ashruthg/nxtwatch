import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideos: [],
  toggleVideo: () => {},
})

export default SavedVideosContext
