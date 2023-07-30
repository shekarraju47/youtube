import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameListContainer = styled.li`
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};

  margin: 10px;
`
export const Linked = styled(Link)`
  margin: 10px;
  width: 22%;
  text-decoration: none;
`

export const GameImg = styled.img`
  width: 90%;
`
export const GamingMainCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  color: ${prev => prev.color};
  background-color: ${prev => prev.bgColor};
  width: 80vw;
  display: flex;
  background-color: ${prev => prev.bgColor};
`

export const GamingContainer = styled.ul`
  display: flex;
  height: 90vh;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
  overflow-y: scroll;
`

export const GameHeading = styled.h1`
  align-self: flex-start;
  margin: 10px;
`
