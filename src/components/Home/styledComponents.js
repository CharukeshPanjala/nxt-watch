import styled from 'styled-components'

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
  cursor: pointer;
`
export const SearchContainer = styled.div`
margin: 10px;
    width: 60%;
    border-radius: 4px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    @media screen and (min-width: 768px){
        width: 40%;
    }
}`

export const SearchIp = styled.input`
    outline: none;
    padding: 5px;
    background-color: transparent;
    width: 90%;
    height: 100%;
  border: 1px solid ${props => (props.lightTheme ? '#909090' : '#606060')};
  color: ${props => (props.lightTheme ? '#909090' : '#606060')}
  @media (max-width: 767px) {
    padding: 3px;
    width: 85%;
  }
}`

export const SearchButton = styled.button`
  outline: none;
  padding: 5px;
  cursor: pointer;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
  width: 10%;
  border: 1px solid ${props => (props.lightTheme ? '#909090' : '#606060')};
  @media (max-width: 767px) {
    padding: 3px;
    width: 15%;
  }
`

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90vh;
`
export const VideosContainer = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lightTheme ? '#f8fafc' : '  #181818')};
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

export const PopupContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`

export const PopupFirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const PopupContainerImage = styled.img`
  width: 120px;
`
export const PopupContainerDescription = styled.p`
  color: #1e293b;
  font-family: roboto;
`
export const PopupContainerButton = styled.button`
border: 1px solid #1e293b;
color : #1e293b;
padding: 10px;
padding-left: 15px;
padding-right: 15px
font-weight: 500;
background-color: transparent;
`
export const PopupContainerClose = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`
