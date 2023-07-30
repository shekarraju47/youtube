import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiSun} from 'react-icons/fi'

import {FaMoon} from 'react-icons/fa'

import Context from '../../context/Context'

import {
  Navbar,
  NavListContainer,
  NavLogoImg,
  NavProfileImg,
  NavListItem,
  ModeBtn,
  // ProfileContainer,
  // LogoutBtn,
} from './style'

const Header = props => (
  <Context.Consumer>
    {value => {
      const {isDark, changeTheme} = value
      // const textColors = isDark ? '#f9f9f9' : '#1e293b'
      const bgcolors = isDark ? '#1e293b' : '#f9f9f9'
      // const btncolor = isDark ? '#f9f9f9' : '#3b82f6'
      const logUrls = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <>
          <Navbar colors={bgcolors}>
            <NavListContainer>
              <Link to="/">
                <NavLogoImg alt="website logo" src={logUrls} />
              </Link>
              <NavListItem>
                <ModeBtn
                  type="button"
                  data-testid="theme"
                  onClick={() => changeTheme()}
                >
                  {isDark ? (
                    <FiSun color="white" size={25} />
                  ) : (
                    <FaMoon size={25} />
                  )}
                </ModeBtn>
                <NavProfileImg
                  alt="profile"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                />
                <Popup
                  modal
                  trigger={<button type="button">Logout</button>}
                  className="logout-popup"
                >
                  {close => (
                    <button type="button">
                      <p>Are you sure, you want to logout</p>
                      <div>
                        <button type="button" onClick={() => close()}>
                          Cancel
                        </button>
                        <button onClick={onClickLogout} type="button">
                          Confirm
                        </button>
                      </div>
                    </button>
                  )}
                </Popup>
              </NavListItem>
            </NavListContainer>
          </Navbar>
        </>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Header)
