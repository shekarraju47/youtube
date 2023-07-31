import styled from 'styled-components'

export const TrendsListContainer = styled.li`
  display: flex;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`

export const TrendsImg = styled.img`
  width: 400px;
  margin-right: 10px;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const TrendsTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  @media screen and (max-width: 768px) {
    align-self: flex-start;
    width: 80%;
  }
`

export const ViewPublishContainer = styled.div`
  display: flex;
`
