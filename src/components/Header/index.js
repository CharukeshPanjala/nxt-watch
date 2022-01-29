import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {IoMoon} from 'react-icons/io5'
import {BiListPlus} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import ThemeContext from '../../context/ThemeContext'

import {
  NavBar,
  WebsiteLogo,
  IconsContainer,
  ChangeThemeButton,
  LabelElement,
  SelectElement,
  SelectItem,
  LargeScreenIconsContainer,
  ProfileImage,
  LogoutButton,
  LogoutPopup,
  LogoutConfirmation,
  ButtonContainer,
  CancelButton,
  LogoutButton2,
} from './styledComponents'
import './index.css'

class Header extends Component {
  state = {
    showOptions: false,
  }

  onSelect = () => {
    console.log(window.location.pathname)
    this.setState({showOptions: false})
  }

  onClickLogout = () => {
    const {history} = this.props

    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  onClickShowOptions = () => {
    this.setState(prevState => ({showOptions: !prevState.showOptions}))
  }

  render() {
    const {showOptions} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme, changeTheme} = value
          return (
            <>
              <NavBar lightTheme={lightTheme}>
                <Link to="/" className="linkItem">
                  <WebsiteLogo
                    src={
                      lightTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
                <IconsContainer>
                  <ChangeThemeButton
                    type="button"
                    lightTheme={lightTheme}
                    onClick={changeTheme}
                    data-testid="theme"
                  >
                    {lightTheme ? <IoMoon /> : <FiSun />}
                  </ChangeThemeButton>
                  <ChangeThemeButton
                    type="button"
                    lightTheme={lightTheme}
                    onClick={this.onClickShowOptions}
                  >
                    <GiHamburgerMenu />
                  </ChangeThemeButton>
                  <Popup
                    modal
                    trigger={
                      <ChangeThemeButton type="button" lightTheme={lightTheme}>
                        <FiLogOut />
                      </ChangeThemeButton>
                    }
                  >
                    {close => (
                      <LogoutPopup lightTheme={lightTheme}>
                        <LogoutConfirmation lightTheme={lightTheme}>
                          Are you sure, you want to logout?
                          <ButtonContainer>
                            <CancelButton type="button" onClick={close}>
                              Cancel
                            </CancelButton>
                            <LogoutButton2
                              type="button"
                              onClick={this.onClickLogout}
                            >
                              Confirm
                            </LogoutButton2>
                          </ButtonContainer>
                        </LogoutConfirmation>
                      </LogoutPopup>
                    )}
                  </Popup>
                </IconsContainer>
                <LargeScreenIconsContainer>
                  <ChangeThemeButton
                    type="button"
                    lightTheme={lightTheme}
                    onClick={changeTheme}
                  >
                    {lightTheme ? <IoMoon /> : <FiSun />}
                  </ChangeThemeButton>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <Popup
                    modal
                    trigger={<LogoutButton type="button">Logout</LogoutButton>}
                  >
                    {close => (
                      <LogoutPopup lightTheme={lightTheme}>
                        <LogoutConfirmation lightTheme={lightTheme}>
                          Are you sure, you want to logout?
                          <ButtonContainer>
                            <CancelButton type="button" onClick={close}>
                              Cancel
                            </CancelButton>
                            <LogoutButton2
                              type="button"
                              onClick={this.onClickLogout}
                            >
                              Confirm
                            </LogoutButton2>
                          </ButtonContainer>
                        </LogoutConfirmation>
                      </LogoutPopup>
                    )}
                  </Popup>
                </LargeScreenIconsContainer>
              </NavBar>
              {showOptions && (
                <LabelElement lightTheme={lightTheme}>
                  <Link to="/" className="linkItem" onClick={this.onSelect}>
                    <SelectElement lightTheme={lightTheme}>
                      <AiFillHome className="nav-icons" />
                      <SelectItem lightTheme={lightTheme}>Home</SelectItem>
                    </SelectElement>
                  </Link>
                  <Link
                    to="/trending"
                    className="linkItem"
                    onClick={this.onSelect}
                  >
                    <SelectElement lightTheme={lightTheme}>
                      <HiFire className="nav-icons" />
                      <SelectItem lightTheme={lightTheme}>Trending</SelectItem>
                    </SelectElement>
                  </Link>
                  <Link
                    to="/gaming"
                    className="linkItem"
                    onClick={this.onSelect}
                  >
                    <SelectElement lightTheme={lightTheme}>
                      <SiYoutubegaming className="nav-icons" />
                      <SelectItem lightTheme={lightTheme}>Gaming</SelectItem>
                    </SelectElement>
                  </Link>
                  <Link
                    to="/saved-videos"
                    className="linkItem"
                    onClick={this.onSelect}
                  >
                    <SelectElement lightTheme={lightTheme}>
                      <BiListPlus className="nav-icons" />
                      <SelectItem lightTheme={lightTheme}>
                        Saved Videos
                      </SelectItem>
                    </SelectElement>
                  </Link>
                </LabelElement>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
