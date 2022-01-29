import styled from 'styled-components'

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
  text-align: center;
`

export const VideosContainer = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#f8fafc' : '  #000000')};
  height: 90vh;
  padding: 20px;
`

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90vh;
`
