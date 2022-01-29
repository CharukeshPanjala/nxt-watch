import styled from 'styled-components'

export const ListContainer = styled.li`
  width: 100%;
  margin-bottom: 12px;
  @media screen and (min-width: 576px) {
    width: 46%;
  }
  @media screen and (min-width: 768px) {
    width: 31%;
  }
`

export const ListImage = styled.img`
  width: 100%;
  margin-bottom: 5px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-top: 0px;
`
export const ChannelImage = styled.img`
  width: 35px;
`
export const DetailsContainer = styled.div`
  padding-top: 0px;
`

export const ChannelName = styled.p`
  color: #606060;
  margin: 0px;
  font-size: 12px;
  margin-right: 5px;
`

export const Title = styled.p`
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
  padding: 0px;
  margin: 0px;
  font-size: 13px;
  margin-bottom: 5px;
`
export const ViewsContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
