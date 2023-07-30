import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedPath from './ProtectedPath/ProtectedPath'
import Login from './components/Login'
import Context from './context/Context'
import Home from './components/Home'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, savedVideos: []}

  changeTheme = () => {
    this.setState(prev => ({
      isDark: !prev.isDark,
    }))
  }

  addToSaved = Videos => {
    this.setState(prev => ({
      savedVideos: [...prev.savedVideos, Videos],
    }))
  }

  removeVideo = id => {
    this.setState(prev => ({
      savedVideos: prev.savedVideos.filter(item => item.id !== id),
    }))
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <Context.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          savedVideos,
          addToSaved: this.addToSaved,
          removeVideo: this.removeVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedPath exact path="/" component={Home} />
          <ProtectedPath
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedPath exact path="/trending" component={Trending} />
          <ProtectedPath exact path="/gaming" component={Gaming} />
          <ProtectedPath exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
