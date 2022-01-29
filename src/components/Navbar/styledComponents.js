import styled from 'styled-components'

export const LabelElement = styled.ul`
  color: ${props => (props.lightTheme ? '#0f0f0f' : ' #f9f9f9')};
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
`

export const SelectElement = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  list-style: none;
  border: 0px;
  color: ${props => (props.lightTheme ? '#1e293b' : ' #f9f9f9')};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    background-color: ${props => (props.lightTheme ? '#616e7c' : '#475569')};
    color: black;
    font-weight: 600;
    .nav-icons {
      color: red;
    }
  }
`

export const SelectItem = styled.p`
  margin-left: 15px;
  color: ${props => (props.lightTheme ? '#1e293b' : ' #f9f9f9')};
`

export const NavContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    height: 90vh;
    background-color: ${props => (props.lightTheme ? '#f9f9f9' : ' #0f0f0f')};
  }
`
