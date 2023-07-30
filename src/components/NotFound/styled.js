import styled from 'styled-components'

export const NotFoundCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
`

export const NotFoundHeading = styled.h1`
  align-self: center;
`
export const NotImg = styled.img`
  width: 30%;
`
