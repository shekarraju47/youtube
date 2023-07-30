import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  color: ${props => props.textColors};
  background-color: ${prop => prop.mainBgColor};
  overflow-y: scroll;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px black;
  padding: 4%;
  border-radius: 6px;
  background-color: ${props => props.bgcolors};
`

export const LogoImg = styled.img`
  align-self: center;
  margin: 20px;
  width: 50%;
`

export const Label = styled.label`
  margin-top: 10px;
`

export const Inputs = styled.input`
  border-radius: 6px;
  border: solid #ebebeb 2px;
  padding: 5px;
  outline: none;
`

export const LoginBtn = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 8px;
  border-radius: 6px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  outline: none;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  margin: 0;
`
