import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 300px;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const Linked = styled(Link)`
  list-style: none;
  text-decoration: none;
  margin: 10px;
`

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  @media screen and (max-width: 576px) {
    width: 380px;
  }
`

export const Title = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 5px;
  }
`
export const Para = styled.p`
  margin: 0;
  font-size: 14px;
  font-family: roboto;
  margin: 1px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: 5px;
  }
`
