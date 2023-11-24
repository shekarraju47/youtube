import {Component} from 'react'
import Cookie from 'js-cookie'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Context from '../../context/Context'
import Header from '../Header/index'
import HomeItems from '../HomeItems'
import MenuItems from '../MenuItems/index'

import {
  HomeMainContainer,
  LoaderContainer,
  SuccessContainer,
  VideosContainer,
  BannerContainer,
  BannerCloseBtn,
  BannerLogo,
  SearchContainer,
  SearchInput,
  SearchBtn,
  BannerCardCont,
} from './styled'
import {NotFoundCont, NotImg, NotFoundHeading} from '../NotFound/styled'
import {Para} from '../HomeItems/styled'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    api: apiStatusConstants.initial,
    Videos: [],
    banner: true,
    search: '',
    searchInput: '',
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {search} = this.state
    this.setState({api: apiStatusConstants.inProgress})
    const token = Cookie.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, option)
    try {
      const data = await response.json()
      const upDate = data.videos.map(item => ({
        thumbNailUrl: item.thumbnail_url,
        id: item.id,
        title: item.title,
        publishedAt: item.published_at,
        viewCount: item.view_count,
        channel: item.channel,
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
        const color = isDark ? '#ffffff' : '#181818'
        const bgColor = isDark ? '#181818' : '#ffffff'
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

  closeBanner = () => {
    this.setState({banner: false})
  }

  searchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    const {searchInput} = this.state
    this.setState({search: searchInput}, this.getData)
  }

  success = () => (
    <Context.Consumer>
      {value => {
        const {Videos, banner, searchInput} = this.state
        const {isDark} = value
        const colors = isDark ? '#ffffff' : '#0f0f0f'
        const bgColors = isDark ? '#181818' : '#ffffff'

        return (
          <SuccessContainer
            banner={banner}
            data-testid="home"
            color={colors}
            bgColor={bgColors}
            isDark={isDark}
          >
            <div>
              {banner && (
                <BannerContainer data-testid="banner">
                  <BannerCardCont>
                    <BannerLogo
                      alt="nxt watch logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    />
                    <Para>Buy Nxt Watch Premium prepaid plans with UPI</Para>
                    <button type="button">GET IT NOW</button>
                  </BannerCardCont>
                  <BannerCloseBtn
                    data-testid="close"
                    onClick={this.closeBanner}
                    type="button"
                  >
                    <AiOutlineClose />
                  </BannerCloseBtn>
                </BannerContainer>
              )}
              <SearchContainer>
                <SearchInput
                  value={searchInput}
                  name="search"
                  onChange={this.searchInput}
                  type="search"
                />
                <SearchBtn
                  data-testid="searchButton"
                  onClick={this.onClickSearch}
                  type="button"
                >
                  <AiOutlineSearch />
                </SearchBtn>
              </SearchContainer>
              <VideosContainer isDark={isDark}>
                {Videos.map(item => (
                  <HomeItems items={item} key={item.id} />
                ))}
              </VideosContainer>
            </div>
          </SuccessContainer>
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
                {this.apiStatus()}
              </HomeMainContainer>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
