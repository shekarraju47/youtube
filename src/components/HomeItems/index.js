import {withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Context from '../../context/Context'
import {Image, Linked, ListItemContainer, Para, Title} from './styled'
import {VideoFlexRow, ChannelLogo} from '../VideoItemDetails/style'

const HomeItems = props => {
  const {items} = props
  const {title, publishedAt, viewCount, thumbNailUrl, channel, id} = items

  const date = formatDistanceToNow(new Date(publishedAt))
  const toSplit = date.split(' ').slice(1)
  const published = toSplit.join(' ')

  return (
    <Context.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Linked to={`/videos/${id}`}>
            <ListItemContainer isDark={isDark}>
              <Image alt="video thumbnail" src={thumbNailUrl} />
              <VideoFlexRow>
                <ChannelLogo
                  alt="channel logo"
                  src={channel.profile_image_url}
                />
                <div>
                  <Title>
                    {title.length > 65 ? `${title.slice(0, 60)}...` : title}
                  </Title>
                  <Para>{channel.name}</Para>
                  <VideoFlexRow>
                    <Para>{viewCount}</Para>
                    <Para>{published} ago</Para>
                  </VideoFlexRow>
                </div>
              </VideoFlexRow>
            </ListItemContainer>
          </Linked>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(HomeItems)
