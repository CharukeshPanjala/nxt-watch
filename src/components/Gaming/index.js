import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoLogoGameControllerB} from 'react-icons/io'
import Cookies from 'js-cookie'
import GameItem from '../GameItem'
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
  FailureRetryButton,
  VideoListContainer,
  Cont,
  BannerContainer,
  BannerLogo,
  BannerHeading,
} from './styledComponents'
import './index.css'

class Trending extends Component {
  state = {status: 'loading', arrayList: []}

  componentDidMount() {
    this.getVideos()
  }

  renderBannerName = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <BannerContainer lightTheme={lightTheme}>
            <BannerLogo lightTheme={lightTheme}>
              <IoLogoGameControllerB className="fire" />
            </BannerLogo>
            <BannerHeading lightTheme={lightTheme}>Gaming</BannerHeading>
          </BannerContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  getVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({status: 'success', arrayList: data}, this.renderHome)
    } else {
      this.setState({status: 'failure'}, this.renderHome)
    }
  }

  renderEachVideo = () => {
    const {arrayList} = this.state
    return (
      <VideoListContainer>
        {arrayList.videos.map(eachItem => (
          <GameItem details={eachItem} key={eachItem.id} />
        ))}
      </VideoListContainer>
    )
  }

  onClickRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <VideosContainer lightTheme={lightTheme} data-testid="gaming">
            <FailureContainer>
              <FailureImage
                src={
                  lightTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                }
                alt="failure view"
              />
              <FailureHeading lightTheme={lightTheme}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureDescription lightTheme={lightTheme}>
                We are having some trouble to complete your request. <br />
                Please try again.
              </FailureDescription>
              <FailureRetryButton type="button" onClick={this.onClickRetry}>
                Retry
              </FailureRetryButton>
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
          <LoaderContainer lightTheme={lightTheme} data-testid="loader">
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
          <VideosContainer lightTheme={lightTheme} data-testid="gaming">
            {this.renderBannerName()}
            {this.renderEachVideo()}
          </VideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHome = () => {
    const {status} = this.state
    switch (status) {
      case 'loading':
        return this.renderLoader()
      case 'success':
        return this.renderVideos()
      case 'failure':
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <>
              <Header lightTheme={lightTheme} />
              <Cont>
                <Navbar />
                {this.renderHome()}
              </Cont>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
