import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  changeTheme: () => {},
  savedVideos: [],
  addSavedVideos: () => {},
})

export default ThemeContext
