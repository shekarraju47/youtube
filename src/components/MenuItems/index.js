import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import Context from '../../context/Context'
import {
  LeftContainerList,
  SocialAcBtn,
  LinkItem,
  LeftContainer,
  Name,
  BottomCont,
  ContactUs,
  Para,
} from './styled'
import {FlexRowContainer} from '../VideoItemDetails/style'

export const menuItems = [
  {id: 'HOME', path: '/', name: 'Home', Icon: AiFillHome},
  {
    id: 'TRENDING',
    path: '/trending',
    name: 'Trending',
    Icon: HiFire,
  },
  {id: 'GAMING', path: '/gaming', name: 'Gaming', Icon: SiYoutubegaming},
  {
    id: 'SAVEDVIDEOS',
    path: '/saved-videos',
    name: 'Saved Videos',
    Icon: BiListPlus,
  },
]

const MenuItems = () => (
  <Context.Consumer>
    {value => {
      const {isDark} = value
      const textColors = isDark ? '#f9f9f9' : '#0f0f0f'
      const bgcolors = isDark ? '#1e293b' : '#f9f9f9'
      const linkParts = document.location.href.split('/')
      const pageLink = `/${linkParts[linkParts.length - 1]}`

      return (
        <LeftContainer colors={bgcolors}>
          <div>
            {menuItems.map(item => {
              const {name, id, path, Icon} = item

              return (
                <LinkItem key={id} to={path}>
                  <LeftContainerList
                    isSelect={pageLink === path}
                    isDark={isDark}
                    colors={bgcolors}
                    textColors={textColors}
                  >
                    <Icon />
                    <Name isDark={isDark} isSelect={pageLink === path}>
                      {name}
                    </Name>
                  </LeftContainerList>
                </LinkItem>
              )
            })}
          </div>
          <BottomCont textColors={textColors}>
            <ContactUs>Contact Us</ContactUs>
            <FlexRowContainer>
              <SocialAcBtn
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <SocialAcBtn
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <SocialAcBtn
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </FlexRowContainer>
            <Para>Enjoy! Now to see your channels and recommendations!</Para>
          </BottomCont>
        </LeftContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(MenuItems)
