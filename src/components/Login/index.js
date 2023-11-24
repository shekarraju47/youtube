import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Context from '../../context/Context'
import {
  FormContainer,
  Inputs,
  LogoImg,
  LoginMainContainer,
  Label,
  LoginBtn,
  ErrorMsg,
} from './styled'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = () => {
    this.setState(prev => ({
      showPassword: !prev.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    this.setState({showError: false})
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    try {
      const response = await fetch(url, option)
      const data = await response.json()
      if (response.ok) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.setState({
          errorMsg: data.error_msg,
          showError: true,
        })
      }
    } catch (e) {
      this.setState({errorMsg: e.message})
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, errorMsg, showError, showPassword} = this.state
    console.log(showPassword)
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          const textColors = isDark ? '#f9f9f9' : '#1e293b'
          const bgcolors = isDark ? '#181818' : '#f9f9f9'
          const mainBgColor = isDark ? '#1e293b' : null
          const imgUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginMainContainer
              mainBgColor={mainBgColor}
              textColors={textColors}
            >
              <p>
                Username: rahul <br />
                Password: rahul@2021
              </p>
              <FormContainer bgcolors={bgcolors} onSubmit={this.onSubmit}>
                <LogoImg alt="website logo" src={imgUrl} />
                <Label htmlFor="name">USERNAME</Label>
                <Inputs
                  placeholder="Username"
                  value={username}
                  onChange={this.onChangeName}
                  type="text"
                  id="name"
                />
                <Label htmlFor="password">PASSWORD</Label>
                <Inputs
                  value={password}
                  placeholder="Password"
                  onChange={this.onChangePassword}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                />
                <div>
                  <Inputs
                    onChange={this.showPassword}
                    id="show"
                    type="checkbox"
                  />
                  <Label htmlFor="show">Show Password</Label>
                </div>
                <LoginBtn type="submit">Login</LoginBtn>
                {showError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormContainer>
              <br />
              <p>*Note Only For Testing</p>
            </LoginMainContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
