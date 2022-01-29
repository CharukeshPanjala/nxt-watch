import styled from 'styled-components'

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90vh;
`

export const VideoContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  overflow: auto;
  padding: 20px 5px;
`

export const VideoFrameContainer = styled.div`
  width: 100%;
  overflow: auto;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ParaEl = styled.p`
  font-size: 15px;
  padding-left: 20px;
  padding-bottom: ${props => props.padding};
  @media (min-width: 768px) {
    align-self: flex-start;
  }
  @media (max-width: 767px) {
    font-size: 13px;
  }
`
export const AttributesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 0;
  align-items: center;
  border-bottom: 2px solid ${props => props.color};
  margin: 0 10px;
`
export const ChannelContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`

export const ContentContainer = styled.div``

export const ImageEl = styled.img`
  height: 40px;
`
export const IconParas = styled.button`
  cursor: pointer;
  color: ${props => props.iconColor};
  font-size: 15px;
  font-weight: 600;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border: 0px;
  background-color: transparent;
`

export const LoaderContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#f8fafc' : '  #000000')};
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const FailureImage = styled.img`
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
  font-size: 18px;
  font-weight: 600;
`
export const FailureDescription = styled.p`
  color: #606060;
`
export const FailureRetryButton = styled.button`
  background-color: #4f46e5;
  border: 0px;
  border-radius: 5px;
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
`
