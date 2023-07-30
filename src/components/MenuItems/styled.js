import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LeftContainerList = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.isSelect ? (props.isDark ? '#383838' : '#cccccc') : null};

  color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.isSelect ? 'red' : props.isDark ? 'white' : 'black'};
  padding-left: 20px;
  box-shadow: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.isSelect
      ? props.isDark
        ? 'inset 0 0 10px black'
        : 'inset 0 0 10px white'
      : null};
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const Name = styled.p`
  font-size: 16px;
  margin-left: 5%;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-weight: ${props => (props.isSelect ? 'bold' : 'normal')};
`
export const LeftContainer = styled.ul`
  background-color: ${prev => prev.colors};
  color: ${prev => prev.colors};
  padding: 0;
  height: 90vh;
  width: 20%;
  margin: 0;
  list-style: none;
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BottomCont = styled.div`
  color: ${props => props.textColors};
  padding-left: 10px;
`

export const SocialAcBtn = styled.img`
  width: 30px;
  margin-right: 15px;
`

export const ContactUs = styled.p`
  font-weight: bold;
`
export const Para = styled.p`
  font-size: 10px;
`
