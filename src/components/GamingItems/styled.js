import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameListContainer = styled.li`
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  width: 100%;
  margin: 10px;
`
export const Linked = styled(Link)`
  margin: 10px;
  width: 27%;
  text-decoration: none;
`

export const GameImg = styled.img`
  width: 100%;
`
export const GamingMainCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  color: ${prev => prev.color};
  background-color: ${prev => prev.bgColor};
  display: flex;
  background-color: ${prev => prev.bgColor};
`

export const GamingContainer = styled.ul`
  display: flex;
  height: 90vh;
  flex-wrap: wrap;
  list-style: none;
  overflow-y: auto;
  padding: 0;
  width: 100%;
`

export const GameHeading = styled.h1`
  align-self: flex-start;
  margin: 10px;
`
