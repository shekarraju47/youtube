import {GameListContainer, Linked, GameImg} from './styled'
import {Title} from '../HomeItems/styled'

const GamingItem = props => {
  const {items, isDark} = props
  const {thumbNailUrl, id, viewCount, title} = items
  return (
    <Linked to={`/videos/${id}`}>
      <GameListContainer isDark={isDark}>
        <GameImg alt="video thumbnail" src={thumbNailUrl} />
        <Title>{title}</Title>
        <p>{viewCount} Watching Worldwide</p>
      </GameListContainer>
    </Linked>
  )
}

export default GamingItem
