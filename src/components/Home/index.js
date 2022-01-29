import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import Header from '../Header'
import Navbar from '../Navbar'
import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'
import {
  LoaderContainer,
  SearchContainer,
  SearchIp,
  SearchButton,
  Cont,
  VideosContainer,
  PopupContainer,
  PopupFirstContainer,
  PopupContainerImage,
  PopupContainerDescription,
  PopupContainerButton,
  PopupContainerClose,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
  VideoListContainer,
} from './styledComponents'

class Home extends Component {
  state = {status: 'loading', searchIp: '', showPopup: true, arrayList: []}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchIp} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchIp}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      if (data.total !== 0) {
        this.setState({status: 'success', arrayList: data}, this.renderHome)
      } else {
        this.setState({status: 'noVideos'}, this.renderHome)
      }
    } else {
      this.setState({status: 'failure'}, this.renderHome)
    }
  }

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

  onChange = event => {
    this.setState({searchIp: event.target.value})
  }

  onSearch = () => {
    this.getVideos()
  }

  onKey = event => {
    if (event.key.toLowerCase() === 'enter') {
      this.onSearch()
    }
  }

  onClickClose = () => {
    this.setState({showPopup: false})
  }

  renderPopup = () => (
    <PopupContainer data-testid="banner">
      <PopupFirstContainer>
        <PopupContainerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <PopupContainerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </PopupContainerDescription>
        <PopupContainerButton type="button">GET IT NOW</PopupContainerButton>
      </PopupFirstContainer>
      <PopupContainerClose
        type="button"
        onClick={this.onClickClose}
        data-testid="close"
      >
        <AiOutlineClose />
      </PopupContainerClose>
    </PopupContainer>
  )

  renderSearchBar = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        const {searchIp} = this.state
        return (
          <SearchContainer lightTheme={lightTheme}>
            <SearchIp
              placeholder="Search Channel"
              type="search"
              value={searchIp}
              onChange={this.onChange}
              onKeyDown={this.onKey}
              lightTheme={lightTheme}
            />
            <SearchButton
              type="button"
              onClick={this.onSearch}
              lightTheme={lightTheme}
              data-testid="searchButton"
            >
              <AiOutlineSearch
                size={20}
                color={lightTheme ? '#64748b' : '#606060'}
              />
            </SearchButton>
          </SearchContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onClickRetry = () => {
    this.getVideos()
  }

  renderNoSearchResults = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHeading lightTheme={lightTheme}>
              No Search Results Found
            </FailureHeading>
            <FailureDescription lightTheme={lightTheme}>
              Try different key words or remove search filters
            </FailureDescription>
            <FailureRetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </FailureRetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        const {showPopup} = this.state
        return (
          <VideosContainer lightTheme={lightTheme}>
            {showPopup && this.renderPopup()}
            {this.renderSearchBar()}
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

  renderEachVideo = () => {
    const {arrayList} = this.state
    return (
      <VideoListContainer>
        {arrayList.videos.map(eachItem => (
          <VideoItem details={eachItem} key={eachItem.id} />
        ))}
      </VideoListContainer>
    )
  }

  renderVideos = () => {
    const {showPopup} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <VideosContainer lightTheme={lightTheme} data-testid="home">
              {showPopup && this.renderPopup()}
              {this.renderSearchBar()}
              {this.renderEachVideo()}
            </VideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderNoVideos = () => {
    const {showPopup} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <VideosContainer lightTheme={lightTheme} data-testid="home">
              {showPopup && this.renderPopup()}
              {this.renderSearchBar()}
              {this.renderNoSearchResults()}
            </VideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderHome = () => {
    const {status} = this.state
    switch (status) {
      case 'loading':
        return this.renderLoader()
      case 'success':
        return this.renderVideos()
      case 'noVideos':
        return this.renderNoVideos()
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

export default Home
