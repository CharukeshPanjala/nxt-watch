import {Component} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetailsRoute'
import SavedVideos from './components/SavedVideos'
import './App.css'

class App extends Component {
  state = {lightTheme: true, savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  addSavedVideos = async data => {
    const {savedVideos} = this.state
    if (savedVideos.length > 0) {
      const checkSavedVideos = savedVideos.filter(item => item.id === data.id)
      if (checkSavedVideos.length === 0) {
        await this.setState({
          savedVideos: [...savedVideos, data],
        })
      } else {
        const updated = savedVideos.filter(item => item.id !== data.id)
        await this.setState({
          savedVideos: [...updated],
        })
      }
    } else {
      await this.setState({
        savedVideos: [...savedVideos, data],
      })
    }
  }

  render() {
    const {lightTheme, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          lightTheme,
          savedVideos,
          changeTheme: this.changeTheme,
          addSavedVideos: this.addSavedVideos,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginRoute} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute path="/videos/:id" component={VideoItemDetails} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    )
  }
}

export default App
