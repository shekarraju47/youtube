import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  display: flex;
  color: ${prev => prev.colors};
  background-color: ${prev => prev.bgColors};
`
export const TrendingHeading = styled.h1`
  align-self: flex-start;
  font-size: 25px;
  color: ${props => props.colors};
  margin-left: 10px;
  @media screen and (max-width: 768px) {
  }
`

export const TrendingVideosContainer = styled.div`
  & {
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: auto;
    padding: 0;
    @media screen and (max-width: 768px) {
      align-items: center;
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  & ::-webkit-scrollbar-track {
    background-color: ${prev => (prev.isDark ? 'black' : 'white')};
  }
  & ::-webkit-scrollbar-thumb {
    box-shadow: inset 0px 0px 10px ${prev => (prev.isDark ? 'white' : 'black')};
  }
`
