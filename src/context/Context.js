import React from 'react'

const Context = React.createContext({
  isDark: false,
  savedVideos: [],
  onChangeSelect: () => {},
  addToSaved: () => {},
  removeVideo: () => {},
})

export default Context
