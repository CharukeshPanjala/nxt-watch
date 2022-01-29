import styled from 'styled-components'

export const LoaderContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#f8fafc' : '#0f0f0f')};
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
export const VideosContainer = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lightTheme ? '#f8fafc' : '#0f0f0f')};
  height: 90vh;
`
export const VideoListContainer = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90vh;
`
export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#231f20')};
  padding: 20px;
`
export const BannerHeading = styled.h1`
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`

export const BannerLogo = styled.div`
  padding: 20px;
  background-color: ${props => (props.lightTheme ? ' #e2e8f0' : '#000000')};
  border-radius: 50px;
  margin-right: 10px;
`
