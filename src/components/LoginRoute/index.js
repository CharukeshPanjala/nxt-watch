import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  BgContainer,
  Card,
  WatchLogo,
  FormContainer,
  LabelElement,
  InputElement,
  CheckboxContainer,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    showSubmitError: '',
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      showPassword,
      username,
      password,
      showSubmitError,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          const LogoUrl = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <BgContainer lightTheme={`${lightTheme}`}>
              <Card lightTheme={`${lightTheme}`}>
                <WatchLogo src={LogoUrl} alt="website logo" />
                <FormContainer onSubmit={this.onSubmitForm}>
                  <LabelElement htmlFor="username">USERNAME</LabelElement>
                  <InputElement
                    id="username"
                    type="text"
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                    value={username}
                  />
                  <LabelElement htmlFor="password">PASSWORD</LabelElement>
                  <InputElement
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                  <CheckboxContainer>
                    <InputElement
                      id="checkbox"
                      type="checkbox"
                      checked={showPassword}
                      onChange={this.onChangeShowPassword}
                    />
                    <CheckboxLabel htmlFor="checkbox" lightTheme={lightTheme}>
                      Show Password
                    </CheckboxLabel>
                  </CheckboxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </FormContainer>
              </Card>
            </BgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
