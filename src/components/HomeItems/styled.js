import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 310px;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
`
export const Linked = styled(Link)`
  list-style: none;
  text-decoration: none;
  margin: 10px;
`

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`
export const Para = styled.p`
  margin: 0;
  font-size: 13px;
  font-family: roboto;
  margin: 1px;
`
