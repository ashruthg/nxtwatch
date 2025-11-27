import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginContainer,
  LoginFormContainer,
  Logo,
  LabelInputContainer,
  LabelEl,
  InputEl,
  ShowPasswordContainer,
  ShowPasswordInputEl,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showPassword: false,
  }

  authenticateUser = async () => {
    const {username, password} = this.state
    const trimmedUsername = username.trim()
    const trimmedPassword = password.trim()

    if (!trimmedUsername || !trimmedPassword) {
      this.setState({errorMsg: '*Username or password is invalid'})
      return
    }

    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: trimmedUsername,
        password: trimmedPassword,
      }),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      this.setState({errorMsg: ''})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: `*${data.error_msg}`})
    }
  }

  onClickLogin = event => {
    event.preventDefault()
    this.authenticateUser()
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, errorMsg, showPassword} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const logo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer isDark={isDark}>
              <LoginFormContainer isDark={isDark} onSubmit={this.onClickLogin}>
                <Logo alt="website logo" src={logo} />
                <LabelInputContainer>
                  <LabelEl isDark={isDark} htmlFor="username">
                    USERNAME
                  </LabelEl>
                  <InputEl
                    onChange={this.onChangeUsername}
                    type="text"
                    isDark={isDark}
                    id="username"
                    placeholder="raja"
                    value={username}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <LabelEl isDark={isDark} htmlFor="password">
                    PASSWORD
                  </LabelEl>
                  <InputEl
                    onChange={this.onChangePassword}
                    type={showPassword ? 'text' : 'password'}
                    isDark={isDark}
                    id="password"
                    placeholder="raja@2021"
                    value={password}
                  />
                </LabelInputContainer>
                <ShowPasswordContainer>
                  <ShowPasswordInputEl
                    id="showPassword"
                    onChange={this.toggleShowPassword}
                    type="checkbox"
                  />
                  <ShowPasswordLabel htmlFor="showPassword" isDark={isDark}>
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
