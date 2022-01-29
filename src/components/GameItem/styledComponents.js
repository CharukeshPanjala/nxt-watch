import styled from 'styled-components'

export const GameListItem = styled.li`
  margin: 8px;
  padding: 8px;
  width: 200px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
`

export const GameThumbnail = styled.img`
  border-radius: 6px;
  width: 100%;
`

export const GamingHeading = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  margin: 8px;
  margin-bottom: 16px;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
`

export const GameWatchingCount = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  margin: 8px;
  margin-bottom: 12px;
`
