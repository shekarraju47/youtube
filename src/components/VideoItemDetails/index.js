import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import Context from '../../context/Context'
import Header from '../Header/index'
import MenuItems from '../MenuItems/index'
import {
  ReactPlayerCont,
  LikeAndMoreDetailCont,
  LikeButtons,
  DisLikeButtons,
  VideoDetailsContainer,
  Line,
  VideoFlexRow,
  ChannelLogo,
  LikeIcon,
  Dislike,
  SaveButtons,
  SaveBtnIcon,
} from './style'
import {
  HomeMainContainer,
  LoaderContainer,
  SuccessContainer,
} from '../Home/styled'
import {Title} from '../HomeItems/styled'
import {NotFoundCont, NotImg, NotFoundHeading} from '../NotFound/styled'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    api: apiStatusConstants.initial,
    Videos: {},
    isLike: false,
    isDislike: false,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({api: apiStatusConstants.inProgress})
    const token = Cookie.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, option)
    try {
      const data = await response.json()
      const upDate = {
        id: data.video_details.id,
        title: data.video_details.title,
        publishedAt: data.video_details.published_at,
        thumbNailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        channel: data.video_details.channel,
        videoUrl: data.video_details.video_url,
        description: data.video_details.description,
      }

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
        const color = isDark ? '#ffffff' : '#0f0f0f'
        const bgColor = isDark ? '#0f0f0f' : '#ffffff'
        return (
          <LoaderContainer data-testid="loader" bgColor={bgColor} color={color}>
            <Loader type="ThreeDots" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </Context.Consumer>
  )

  success = () => (
    <Context.Consumer>
      {value => {
        const {Videos, isDislike, isLike} = this.state
        const {
          videoUrl,
          title,
          viewCount,
          description,
          id,
          publishedAt,
          channel,
        } = Videos
        const {name} = channel
        const date = formatDistanceToNow(new Date(publishedAt))
        const toSplit = date.split(' ').slice(1)
        const published = toSplit.join(' ')

        const {isDark, addToSaved, savedVideos, removeVideo} = value
        const colors = isDark ? '#ffffff' : '#0f0f0f'

        const bgColors = isDark ? '#0f0f0f' : '#ffffff'
        const isSaved = savedVideos.some(item => item.id === id)
        const save = () => {
          addToSaved(Videos)
        }
        const remove = () => {
          removeVideo(id)
        }

        const like = () => {
          this.setState(prev => ({
            isLike: !prev.isLike,
            isDislike: false,
          }))
        }

        const dislike = () => {
          this.setState(prev => ({
            isDislike: !prev.isDislike,
            isLike: false,
          }))
        }

        return (
          <>
            <SuccessContainer
              data-testid="videoItemDetails"
              color={colors}
              bgColor={bgColors}
            >
              <VideoDetailsContainer isDark={isDark}>
                <ReactPlayerCont>
                  <ReactPlayer width="100%" url={videoUrl} />
                </ReactPlayerCont>
                <Title>{title}</Title>
                <LikeAndMoreDetailCont>
                  <VideoFlexRow>
                    <p>{viewCount} Views </p>
                    <p> {published} ago</p>
                  </VideoFlexRow>
                  <VideoFlexRow>
                    <LikeButtons isLike={isLike} onClick={like} type="button">
                      <LikeIcon color={isLike ? '#2563eb' : '#64748b'} /> Like
                    </LikeButtons>
                    <DisLikeButtons
                      isDislike={isDislike}
                      onClick={dislike}
                      type="button"
                    >
                      <Dislike color={isDislike ? '#2563eb' : '#64748b'} />
                      Dislike
                    </DisLikeButtons>
                    <SaveButtons
                      isSaved={isSaved}
                      onClick={isSaved ? remove : save}
                      type="button"
                    >
                      <SaveBtnIcon color={isSaved ? '#2563eb' : '#64748b'} />
                      {isSaved ? 'Saved' : 'Save'}
                    </SaveButtons>
                  </VideoFlexRow>
                </LikeAndMoreDetailCont>
                <Line />
                <VideoFlexRow>
                  <ChannelLogo
                    alt="channel logo"
                    src={channel.profile_image_url}
                  />
                  <div>
                    <Title>{name}</Title>
                    <p>{channel.subscriber_count} Subscribers</p>
                    <p>{description}</p>
                  </div>
                </VideoFlexRow>
              </VideoDetailsContainer>
            </SuccessContainer>
          </>
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
            <p>
              We are having some trouble to complete your request. Please try
              again.
            </p>
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

export default VideoItemDetails
