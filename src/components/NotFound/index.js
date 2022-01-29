import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Navbar from '../Navbar'
import {
  Cont,
  VideosContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <>
          <Header lightTheme={lightTheme} />
          <Cont>
            <Navbar />
            <VideosContainer lightTheme={lightTheme}>
              <FailureContainer>
                <FailureImage
                  src={
                    lightTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  }
                  alt="not found"
                />
                <FailureHeading lightTheme={lightTheme}>
                  Page Not Found
                </FailureHeading>
                <FailureDescription lightTheme={lightTheme}>
                  We are sorry, the page you requested could not be found.
                </FailureDescription>
              </FailureContainer>
            </VideosContainer>
          </Cont>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
