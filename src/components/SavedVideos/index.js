import {BiListPlus} from 'react-icons/bi'
import Context from '../../context/Context'
import Header from '../Header'
import MenuItems from '../MenuItems'
import TrendingItemDetails from '../TrendingItemDetails'
import {
  TrendingMainContainer,
  TrendingVideosContainer,
  TrendingHeading,
} from '../Trending/styled'
import {SuccessContainer} from '../Home/styled'
import {FlexRowContainer} from '../VideoItemDetails/style'
import {NotFoundCont, NotImg, NotFoundHeading} from '../NotFound/styled'

const SavedVideos = () => (
  <Context.Consumer>
    {value => {
      const {isDark, savedVideos} = value
      const colors = isDark ? '#ffffff' : '#0f0f0f'
      const bgColors = isDark ? '#0f0f0f' : '#ffffff'
      const failImgUrl =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png '
      return (
        <>
          <Header />
          <TrendingMainContainer bgColors={bgColors} colors={colors}>
            <MenuItems />

            <SuccessContainer
              data-testid="savedVideos"
              color={colors}
              bgColor={bgColors}
            >
              <TrendingVideosContainer isDark={isDark}>
                <FlexRowContainer>
                  <BiListPlus />
                  <TrendingHeading colors={colors}>
                    Saved Videos
                  </TrendingHeading>
                </FlexRowContainer>

                <TrendingVideosContainer isDark={isDark}>
                  {savedVideos.length > 0 ? (
                    <>
                      {savedVideos.map(item => (
                        <TrendingItemDetails
                          isDark={isDark}
                          items={item}
                          key={item.id}
                        />
                      ))}
                    </>
                  ) : (
                    <NotFoundCont>
                      <NotImg alt="no saved videos" src={failImgUrl} />
                      <NotFoundHeading>No saved videos found</NotFoundHeading>
                      <p>Save your videos by clicking a button</p>
                    </NotFoundCont>
                  )}
                </TrendingVideosContainer>
              </TrendingVideosContainer>
            </SuccessContainer>
          </TrendingMainContainer>
        </>
      )
    }}
  </Context.Consumer>
)

export default SavedVideos
