import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  color: ${prev => prev.textColors};
`

export const Heading = styled.h1`
  font-weight: bold;
`

export const LoaderContainer = styled.div`
  color: ${prev => prev.color};
  background-color: ${prev => prev.bgColor};
  width: 80vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SuccessContainer = styled(LoaderContainer)`
  height: 90vh;
  color: ${prev => prev.color};
  background-color: ${prev => prev.bgColor};
`

export const VideosContainer = styled.ul`
  & {
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    overflow-y: auto;
    color: ${props => (props.isDark ? '#ffffff' : '#181818')};
    padding:5px;
  }

  &::-webkit-scrollbar {
      width: 8px;
    }
  & 
    ::-webkit-scrollbar-track {
        background-color: ${prev => (prev.isDark ? 'black' : 'white')};
      }
  & ::-webkit-scrollbar-thumb {
        box-shadow: inset 0px 0px 10px ${prev =>
          prev.isDark ? 'white' : 'black'};        
    }
    
  }
`
export const VideoItem = styled.li``
