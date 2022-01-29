import styled from 'styled-components'

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ContactDescription = styled.p`
  color: ${props => (props.lightTheme ? '#0f0f0f' : ' #f9f9f9')};
  font-size: ${props => props.size};
  font-weight: ${props => props.fontWeight};
  font-family: roboto;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ImageIcon = styled.img`
  width: 30px;
  margin-right: 15px;
`
