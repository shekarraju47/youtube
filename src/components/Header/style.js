import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {TiThMenu} from 'react-icons/ti'
import {FiLogOut} from 'react-icons/fi'

export const LogoutIcon = styled(FiLogOut)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 20px;
  }
`
export const LogoutText = styled.p`
  color: ${prev => prev.btncolor};
  border: solid 1px ${prev => prev.color};
  padding: 5px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Navbar = styled.nav`
  background-color: ${prev => prev.colors};
  color: ${prev => prev.colors};
  height: 10vh;
`
export const MenuContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 25px;
    color: black;
  }
`
export const MenuItemCont = styled.ul`
  width: 40vw;
  list-style: none;
  color: ${prev => prev.bgcolors};
  padding: 0;
  margin: 0;
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgcolors};
`

export const NavListContainer = styled.ul`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 10px;
`

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavLogoImg = styled.img`
  width: 50%;
  padding: 10px;
`
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`

export const NavProfileImg = styled.img`
  width: 15%;
`
export const ModeBtn = styled.button`
  align-self: center;
  border: none;
  font-weight: bold;
  background-color: inherit;
`

export const LogoutPopup = styled.button`
  background-color: ${prop => (prop.isDark ? '#1e293b' : '#f9f9f9')};
  color: ${prop => (prop.isDark ? 'white' : 'black')};
  border: none;
  padding: 10px;
  border-radius: 6px;
`

export const LogoutBtn = styled(ModeBtn)``

export const StyledPopup = styled(Popup)`
  height: 100vh;
  width: 100vw;
`

export const Confirm = styled.button`
  background-color: #3b82f6;
  height: 34px;
  width: 100px;
  font-weight: 600;
  font-size: 15px;
  color: white;
  cursor: pointer;
  border-width: 0px;
  margin-left: 6px;
`
export const List = styled.li`
  padding-left: 0px;
  margin: 10px;
  align-self: center;
`

export const Logout = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
    border: 1px solid #3b82f6;
    background-color: transparent;
    height: 34px;
    width: 100px;
    font-weight: 600;
    font-size: 15px;
    color: #3b82f6;
    cursor: pointer;
  }
`

export const MenuBtn = styled(TiThMenu)`
  display: block;
  font-size: 22px;
  color: black;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MenuIcon = styled.button`
  background-color: inherit;
  border: none;
`

export const Close = styled.button`
  border: 1px solid ${props => (props.isDark ? '#cccccc' : '#313131')};
  background-color: transparent;
  height: 34px;
  width: 100px;
  font-weight: 600;
  font-size: 15px;
  color: ${props => (props.isDark ? '#cccccc' : '#313131')};
  cursor: pointer;
`

export const LogoutDiv = styled.div`
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  border-radius: 10px;
  padding: 20px;
  border: 1px solid ${props => (props.isDark ? 'white' : 'black')};
`
export const Text = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
`
