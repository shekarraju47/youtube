import {formatDistanceToNow} from 'date-fns'
import {
  TrendsImg,
  ViewPublishContainer,
  TrendsTitle,
  TrendsListContainer,
} from './style'
import {Linked} from '../HomeItems/styled'

const TrendingItemDetails = props => {
  const {items, isDark} = props
  const {title, thumbNailUrl, viewCount, id, publishedAt, channel} = items
  const {name} = channel
  let published = formatDistanceToNow(new Date(publishedAt))

  const postedAtList = published.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    published = postedAtList.join(' ')
  }

  return (
    <Linked to={`/videos/${id}`}>
      <TrendsListContainer isDark={isDark}>
        <TrendsImg alt="video thumbnail" src={thumbNailUrl} />
        <div>
          <TrendsTitle>{title}</TrendsTitle>
          <p>{name}</p>
          <ViewPublishContainer>
            <p>{viewCount}</p>
            <p>{published} ago</p>
          </ViewPublishContainer>
        </div>
      </TrendsListContainer>
    </Linked>
  )
}

export default TrendingItemDetails
