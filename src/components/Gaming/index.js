import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Context from '../../context/Context'
import Header from '../Header/index'
import GamingItem from '../GamingItems'
import MenuItems from '../MenuItems/index'
import {GamingMainCard} from '../GamingItems/styled'
import {TrendingHeading} from '../Trending/styled'
import {
  HomeMainContainer,
  LoaderContainer,
  VideosContainer,
} from '../Home/styled'
import {FlexRowContainer} from '../VideoItemDetails/style'
import {NotFoundCont, NotImg, NotFoundHeading} from '../NotFound/styled'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    api: apiStatusConstants.initial,
    Videos: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({api: apiStatusConstants.inProgress})
    const token = Cookie.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, option)
    const data = await response.json()
    try {
      const upDate = data.videos.map(item => ({
        thumbNailUrl: item.thumbnail_url,
        id: item.id,
        title: item.title,
        viewCount: item.view_count,
      }))

      if (response.ok) {
        this.setState({api: apiStatusConstants.success, Videos: upDate})
      } else {
        this.setState({api: apiStatusConstants.failure})
      }
    } catch (e) {
      this.setState({api: apiStatusConstants.failure})
    }
  }

  loading = () => (
    <Context.Consumer>
      {value => {
        const {isDark} = value
        const color = isDark ? '#ffffff' : '#000000'
        const bgColor = isDark ? '#000000' : '#ffffff'
        return (
          <LoaderContainer data-testid="loader" bgColor={bgColor} color={color}>
            <Loader type="ThreeDots" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </Context.Consumer>
  )

  onVideosList = () => {
    const {videos} = this.state
    this.setState(videos)
  }

  success = () => (
    <Context.Consumer>
      {value => {
        const {Videos} = this.state
        const {isDark} = value
        const colors = isDark ? '#ffffff' : '#000000'
        const bgColors = isDark ? '#0f0f0f' : '#ffffff'
        return (
          <GamingMainCard
            data-testid="gaming"
            color={colors}
            bgColor={bgColors}
          >
            <FlexRowContainer>
              <SiYoutubegaming />
              <TrendingHeading colors={colors}>Gaming</TrendingHeading>
            </FlexRowContainer>
            <VideosContainer isDark={isDark}>
              {Videos.map(item => (
                <GamingItem isDark={isDark} items={item} key={item.id} />
              ))}
            </VideosContainer>
          </GamingMainCard>
        )
      }}
    </Context.Consumer>
  )

  retry = () => {
    this.getData()
  }

  failure = () => (
    <Context.Consumer>
      {value => {
        const {isDark} = value
        const color = isDark ? '#ffffff' : '#0f0f0f'
        const bgColor = isDark ? '#0f0f0f' : '#ffffff'
        const failImgUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <NotFoundCont color={color} bgColor={bgColor}>
            <NotImg alt="failure view" src={failImgUrl} />
            <NotFoundHeading>Oops! Something Went Wrong</NotFoundHeading>
            <p>We are having some trouble</p>
            <button onClick={this.retry} type="button">
              Retry
            </button>
          </NotFoundCont>
        )
      }}
    </Context.Consumer>
  )

  apiStatus = () => {
    const {api} = this.state
    switch (api) {
      case apiStatusConstants.inProgress:
        return this.loading()
      case apiStatusConstants.success:
        return this.success()
      case apiStatusConstants.failure:
        return this.failure()
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          const textColors = isDark ? '#f9f9f9' : '#1e293b'
          return (
            <>
              <Header />
              <HomeMainContainer textColors={textColors}>
                <MenuItems />
                <div>{this.apiStatus()}</div>
              </HomeMainContainer>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Gaming
