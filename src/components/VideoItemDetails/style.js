import styled from 'styled-components'

import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'
import {TrendingVideosContainer} from '../Trending/styled'

export const VideoTitle = styled.p`
  font-size: 16px;
  align-self: flex-start;
`

export const LikeAndMoreDetailCont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const FlexRowContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  color: red;
  margin-left: 20px;
`
export const VideoFlexRow = styled.div`
  display: flex;
`

export const Buttons = styled.button`
  border: none;
  background-color: inherit;
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  outline: none;
  font-size: 16px;
  cursor: pointer;
`
export const LikeButtons = styled(Buttons)`
  color: ${props => (props.isLike ? '#2563eb' : '#64748b')};
`
export const LikeIcon = styled(BiLike)`
  font-size: 20px;
  color: ${props => (props.isLike ? '#2563eb' : '#64748b')};
`

export const DisLikeButtons = styled(Buttons)`
  color: ${props => (props.isDislike ? '#2563eb' : '#64748b')};
`

export const Dislike = styled(BiDislike)`
  font-size: 20px;
  color: ${props => (props.isDislike ? '#2563eb' : '#64748b')};
`

export const SaveButtons = styled(Buttons)`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`

export const SaveBtnIcon = styled(RiPlayListAddLine)`
  font-size: 20px;
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`

export const ReactPlayerCont = styled.div``

export const VideoDetailsContainer = styled(TrendingVideosContainer)`
  padding-top: 20px;
  padding: 20px;
`

export const Line = styled.hr`
  width: 100%;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin-right: 5px;
`
