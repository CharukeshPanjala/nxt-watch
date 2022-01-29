import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ContactUs from '../ContactUs'
import ThemeContext from '../../context/ThemeContext'
import {
  LabelElement,
  SelectElement,
  SelectItem,
  NavContainer,
} from './styledComponents'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <NavContainer lightTheme={lightTheme}>
          <LabelElement lightTheme={lightTheme}>
            <Link to="/" className="linkItem">
              <SelectElement lightTheme={lightTheme}>
                <AiFillHome className="nav-icons" />
                <SelectItem lightTheme={lightTheme}>Home</SelectItem>
              </SelectElement>
            </Link>
            <Link to="/trending" className="linkItem">
              <SelectElement lightTheme={lightTheme}>
                <HiFire className="nav-icons" />
                <SelectItem lightTheme={lightTheme}>Trending</SelectItem>
              </SelectElement>
            </Link>
            <Link to="/gaming" className="linkItem">
              <SelectElement lightTheme={lightTheme}>
                <SiYoutubegaming className="nav-icons" />
                <SelectItem lightTheme={lightTheme}>Gaming</SelectItem>
              </SelectElement>
            </Link>
            <Link to="/saved-videos" className="linkItem">
              <SelectElement lightTheme={lightTheme}>
                <BiListPlus className="nav-icons" />
                <SelectItem lightTheme={lightTheme}>Saved Videos</SelectItem>
              </SelectElement>
            </Link>
          </LabelElement>
          <ContactUs />
        </NavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
