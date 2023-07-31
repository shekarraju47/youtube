import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  color: ${prev => prev.textColors};
`
export const BannerCloseBtn = styled.button`
  align-self: flex-start;
  border: none;
  background-color: inherit;
  cursor: pointer;
  margin-top: 2%;
  @media screen and (max-width: 768px) {
    margin-top: 10%;
  }
`

export const Heading = styled.h1`
  font-weight: bold;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 20px;
  margin-top: 20%;
  justify-content: space-between;
  background-color: #ffffff;
  color: black;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`
export const BannerCardCont = styled.div``

export const BannerImg = styled.img`
  width: 200px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const BannerLogo = styled.img`
  width: 150px;
  padding-top: 10%;
`
export const SearchContainer = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
`

export const SearchInput = styled.input`
  width: 40%;
`
export const SearchBtn = styled.button``

export const LoaderContainer = styled.div`
  color: ${prev => prev.color};
  background-color: ${prev => prev.bgColor};
  width: 80vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`

export const SuccessContainer = styled.div`
    width:100vw;
    overflow-y:auto;
    height:90vh;
    color: ${prev => prev.color};
    background-color: ${prev => prev.bgColor};
    display: flex;
    align-items: center;
    overflow-y: auto;
    justify-content: center;
    ::-webkit-scrollbar {
        width: 8px;       
    }
    ::-webkit-scrollbar-track {
        background-color: ${prev => (prev.isDark ? 'black' : 'white')};
    }
    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0px 0px 10px
          ${prev => (prev.isDark ? 'white' : 'black')};
    }
    @media screen and (min-width: 768px) {
      height: 90vh;
      width: 80vw;
      color: ${prev => prev.color};
      background-color: ${prev => prev.bgColor};
      display: flex;
      align-items: center;
      overflow-y: auto;
      justify-content: center;
      &::-webkit-scrollbar {
        width: 8px;
      }
      & ::-webkit-scrollbar-track {
        background-color: ${prev => (prev.isDark ? 'black' : 'white')};
      }
      & ::-webkit-scrollbar-thumb {
        box-shadow: inset 0px 0px 10px
          ${prev => (prev.isDark ? 'white' : 'black')};
      }
    }
  }
`

export const VideosContainer = styled.ul`
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  padding: 5px;
  @media screen and (max-width: 768px) {
    color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  }
`
export const VideoItem = styled.li``
