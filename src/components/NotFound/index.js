import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import Context from '../../context/Context'
import Header from '../Header'
import MenuItems from '../MenuItems'
import {NotFoundCont, NotFoundHeading, NotImg} from './styled'

import {TrendingMainContainer} from '../Trending/styled'

const NotFound = () => {
  const token = Cookie.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <Context.Consumer>
      {value => {
        const {isDark} = value
        const colors = isDark ? '#ffffff' : '#0f0f0f'
        const bgColors = isDark ? '#000000' : '#ffffff'
        const imgUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

        return (
          <>
            <Header />
            <TrendingMainContainer bgColors={bgColors} colors={colors}>
              <MenuItems />
              <NotFoundCont>
                <NotImg alt="not found" src={imgUrl} />
                <NotFoundHeading>Page Not Found</NotFoundHeading>
                <p>we are sorry, the page you requested could not be found.</p>
              </NotFoundCont>
            </TrendingMainContainer>
          </>
        )
      }}
    </Context.Consumer>
  )
}
export default NotFound
