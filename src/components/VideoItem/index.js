import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import {
  ListImage,
  ListContainer,
  Container,
  ChannelImage,
  ChannelName,
  Title,
  DetailsContainer,
  ViewsContainer,
  ImageContainer,
} from './styledComponents'

const VideoItem = props => {
  const {details} = props
  const {channel} = details

  return (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <ListContainer>
            <Link className="link" to={`/videos/${details.id}`}>
              <ListImage src={details.thumbnail_url} alt="video thumbnail" />
              <Container>
                <ImageContainer>
                  <ChannelImage
                    src={channel.profile_image_url}
                    alt="channel logo"
                  />
                </ImageContainer>

                <DetailsContainer>
                  <Title lightTheme={lightTheme}>{details.title}</Title>
                  <ChannelName>{channel.name}</ChannelName>
                  <ViewsContainer>
                    <ChannelName>{details.view_count} views</ChannelName>
                    <ChannelName>
                      <BsDot className="dot" />
                    </ChannelName>
                    <ChannelName>{details.published_at}</ChannelName>
                  </ViewsContainer>
                </DetailsContainer>
              </Container>
            </Link>
          </ListContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
