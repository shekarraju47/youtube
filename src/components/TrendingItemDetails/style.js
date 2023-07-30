import styled from 'styled-components'

export const TrendsListContainer = styled.li`
  display: flex;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  flex-wrap: wrap;
`

export const TrendsImg = styled.img`
  width: 280px;
  height: 150px;
  margin-right: 10px;
  border-radius: 8px;
`

export const TrendsTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`

export const ViewPublishContainer = styled.div`
  display: flex;
`
