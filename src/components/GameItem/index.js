import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  GameListItem,
  GameThumbnail,
  GamingHeading,
  GameWatchingCount,
} from './styledComponents'
import './index.css'

const GameItem = props => {
  const {details} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {lightTheme} = value
        return (
          <GameListItem>
            <Link to={`videos/${details.id}`} className="video-link">
              <GameThumbnail
                src={details.thumbnail_url}
                alt="video thumbnail"
              />
              <GamingHeading isDark={!lightTheme}>
                {details.title}
              </GamingHeading>
              <GameWatchingCount isDark={!lightTheme}>
                {details.view_count} Watching Worldwide
              </GameWatchingCount>
            </Link>
          </GameListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GameItem
