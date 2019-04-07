import React from 'react'
import styled from 'styled-components'
import PhotoPaginationComponent from './components/photo-pagination/photo-pagination.component';

const App = () => (
  <StyledContainer>
    <PhotoPaginationComponent/>
  </StyledContainer>
)

const StyledContainer = styled.div `
  margin: 0 auto;
  width: 600px;
`

export default App
