import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import VideoItem from '../VideoItem'
import Header from '../Header'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import {
  LoaderContainer,
  VideosContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  VideoListContainer,
  Cont,
  BannerContainer,
  BannerLogo,
  BannerHeading,
} from './styledComponents'
import './index.css'

class SavedVideos extends Component {
  renderBannerName = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <BannerContainer lightTheme={lightTheme}>
            <BannerLogo lightTheme={lightTheme}>
              <HiFire className="fire" />
            </BannerLogo>
            <BannerHeading lightTheme={lightTheme}>Saved Videos</BannerHeading>
          </BannerContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderEachVideo = () => (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideos} = value
        return (
          <VideoListContainer>
            {savedVideos.map(eachItem => (
              <VideoItem details={eachItem} key={eachItem.id} />
            ))}
          </VideoListContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <VideosContainer lightTheme={lightTheme} data-testid="savedVideos">
            <FailureContainer>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <FailureHeading lightTheme={lightTheme}>
                No saved videos found
              </FailureHeading>
              <FailureDescription lightTheme={lightTheme}>
                You can save your videos while watching them
              </FailureDescription>
            </FailureContainer>
          </VideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoader = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <LoaderContainer lightTheme={lightTheme}>
            <Loader type="TailSpin" color="#ff0000" height="60" width="60" />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <VideosContainer lightTheme={lightTheme} data-testid="savedVideos">
            {this.renderBannerName()}
            {this.renderEachVideo()}
          </VideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme, savedVideos} = value
          return (
            <>
              <Header lightTheme={lightTheme} />
              <Cont>
                <Navbar />
                {savedVideos.length === 0
                  ? this.renderFailureView()
                  : this.renderVideos()}
              </Cont>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
