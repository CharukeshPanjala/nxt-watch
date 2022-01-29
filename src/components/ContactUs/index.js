import ThemeContext from '../../context/ThemeContext'
import {
  ContactUsContainer,
  ContactDescription,
  ImageContainer,
  ImageIcon,
} from './styledComponents'

const ContactUs = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <ContactUsContainer>
          <ContactDescription
            lightTheme={lightTheme}
            size="15px"
            fontWeight="600"
          >
            CONTACT US
          </ContactDescription>
          <ImageContainer>
            <ImageIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <ImageIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <ImageIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </ImageContainer>
          <ContactDescription
            lightTheme={lightTheme}
            size="13px"
            fontWeight="500"
          >
            Enjoy! Now to see your channels and recommendations!
          </ContactDescription>
        </ContactUsContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default ContactUs
