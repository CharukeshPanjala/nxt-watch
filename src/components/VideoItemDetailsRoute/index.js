import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import Navbar from '../Navbar'

import {
  VideoFrameContainer,
  VideoContainer,
  ParaEl,
  AttributesContainer,
  ChannelContainer,
  ImageEl,
  ContentContainer,
  IconParas,
  Cont,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    liked: false,
    disliked: false,
    status: 'loading',
  }

  componentDidMount() {
    this.getData()
  }

  componentWillUnmount() {
    this.mounted = false
  }

  getData = async () => {
    this.mounted = true
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.setState(
        {videoDetails: data.video_details, status: 'success'},
        this.renderHome,
      )
    } else {
      this.setState({status: 'failure'}, this.renderHome)
    }
  }

  isDisliked = () => {
    const {liked, disliked} = this.state
    if (liked) {
      this.setState({liked: false})
    }
    if (disliked) {
      this.setState({disliked: false})
    } else {
      this.setState({disliked: true})
    }
  }

  isLiked = () => {
    const {liked, disliked} = this.state
    if (disliked) {
      this.setState({disliked: false})
    }
    if (liked) {
      this.setState({liked: false})
    } else {
      this.setState({liked: true})
    }
  }

  renderVideo = () => {
    const {videoDetails, liked, disliked} = this.state
    const {channel} = videoDetails
    return (
      <ThemeContext.Consumer>
        {values => {
          const {lightTheme, addSavedVideos, savedVideos} = values
          const bgColor = lightTheme ? '#ffffff' : '#0f0f0f'
          const color = lightTheme ? '#000000' : '#ffffff'

          const onSave = () => {
            addSavedVideos(videoDetails)
          }

          const x = savedVideos.find(
            eachItem => eachItem.id === videoDetails.id,
          )
          return (
            <VideoContainer
              bgColor={bgColor}
              color={color}
              data-testid="videoItemDetails"
            >
              <VideoFrameContainer>
                <ReactPlayer
                  url={videoDetails.video_url}
                  controls
                  className="react-player"
                />
                <ParaEl>{videoDetails.title}</ParaEl>
              </VideoFrameContainer>
              <AttributesContainer>
                <ParaEl>
                  {videoDetails.view_count} views{' '}
                  <span className="dot">
                    <BsDot />
                  </span>{' '}
                  {videoDetails.published_at}
                </ParaEl>
                <ChannelContainer color={color}>
                  <IconParas
                    onClick={this.isLiked}
                    iconColor={liked ? '#2563eb' : '#64748b'}
                  >
                    <AiOutlineLike size={20} /> Like
                  </IconParas>
                  <IconParas
                    onClick={this.isDisliked}
                    iconColor={disliked ? '#2563eb' : '#64748b'}
                  >
                    <AiOutlineDislike size={20} /> Dislike
                  </IconParas>
                  <IconParas
                    onClick={onSave}
                    iconColor={x !== undefined ? '#2563eb' : '#64748b'}
                    type="button"
                  >
                    <MdPlaylistAdd size={20} /> {x ? 'Saved' : 'Save'}
                  </IconParas>
                </ChannelContainer>
              </AttributesContainer>
              <ChannelContainer>
                <ImageEl src={channel.profile_image_url} alt="channel logo" />
                <ContentContainer>
                  <ParaEl>{channel.name}</ParaEl>
                  <ParaEl>{channel.subscriber_count}</ParaEl>
                </ContentContainer>
              </ChannelContainer>
              <ParaEl padding="30px">{videoDetails.description}</ParaEl>
            </VideoContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
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

  onClickRetry = () => {
    this.getData()
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        const bgColor = lightTheme ? '#ffffff' : '#000000'
        const color = lightTheme ? '#000000' : '#ffffff'
        return (
          <VideoContainer bgColor={bgColor} color={color}>
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
          </VideoContainer>
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
        return this.renderVideo()
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

export default VideoItemDetails
