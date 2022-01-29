import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.lightTheme === 'true' ? '#f9f9f9' : ' #181818'};
`

export const Card = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.lightTheme === 'true' ? '#f8fafc' : '#000000'};
  padding: 20px;
  box-shadow: ${props =>
    props.lightTheme === 'true' ? '3px 3px 5px 2px #e2e8f0' : 'none'};
`
export const WatchLogo = styled.img`
  width: 40%;
  align-self: center;
  margin: 20px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const LabelElement = styled.label`
  font-family: roboto;
  color: #94a3b8;
  font-weight: 550;
  margin-top: 20px;
  font-size: 12px;
`

export const InputElement = styled.input`
  font-family: roboto;
  padding: 7px;
  outline: none;
  border: 1px solid #94a3b8;
  color: #94a3b8;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: transparent;
  ::placeholder {
    color: #94a3b8;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CheckboxLabel = styled.label`
  font-family: roboto;
  font-size: 10px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#181818' : '#f8fafc')};
`

export const LoginButton = styled.button`
  border: 0px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: roboto;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-family: roboto;
  font-size: 10px;
  color: #ff0000;
`
