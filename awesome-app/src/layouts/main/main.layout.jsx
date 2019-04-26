import React from 'react'
import styled from 'styled-components'

const MainLayout = props => <StyledContainer>{props.children}</StyledContainer>

const StyledContainer = styled.div`
    background: linear-gradient(to top right, #389, #983);
`

export default MainLayout
