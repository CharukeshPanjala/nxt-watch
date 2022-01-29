import styled from 'styled-components'

export const NavBar = styled.nav`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : ' #0f0f0f')};
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`

export const WebsiteLogo = styled.img`
  width: 100px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LargeScreenIconsContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const ChangeThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  color: ${props => (props.lightTheme ? '#0f0f0f' : ' #f9f9f9')};
  font-size: 20px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 7px;
  }
`

export const LabelElement = styled.ul`
  color: ${props => (props.lightTheme ? '#0f0f0f' : ' #f9f9f9')};
  font-size: 20px;
  margin-right: 10px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : ' #0f0f0f')};
  list-style: none;
  margin: 0px;
  padding: 0px;
  height: 90vh;
`

export const SelectElement = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  list-style: none;
  border: 0px;
  color: ${props => (props.lightTheme ? '#1e293b' : ' #f9f9f9')};
  :hover {
    background-color: ${props => (props.lightTheme ? '#616e7c' : '#475569')};
    color: black;
    font-weight: 550;
    .nav-icons {
      color: red;
    }
  }
`

export const SelectItem = styled.p`
  margin-left: 10px;
`

export const ProfileImage = styled.img`
  margin-left: 10px;
  width: 20px;
  margin-right: 20px;
`

export const LogoutButton = styled.button`
  color: #3b82f6;
  border: 1.5px solid #3b82f6;
  padding: 5px;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  background-color: transparent;
  margin-right: 20px;
  font-weight: 550;
`

export const LogoutPopup = styled.div`
  padding: 16px;
  border-radius: 8px;
  width: 300px;
  height: 200px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoutConfirmation = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-size: 16px;
  text-align: center;
`

export const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  width: 200px;
  display: flex;
  justify-content: space-between;
`

export const LogoutButton2 = styled.button`
  color: white;
  background-color: #4f46e5;
  border-radius: 4px;
  border-width: 0px;
  font-family: 'Roboto';
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center
  cursor: pointer;
  
`

export const CancelButton = styled.button`
  color: #94a3b8;
  border-color: #94a3b8;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center
  cursor: pointer;
`
