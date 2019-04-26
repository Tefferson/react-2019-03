import React from 'react'
import styled from 'styled-components'

const PrivateLayout = props => (
    <StyledContainer>{props.children}</StyledContainer>
)

const StyledContainer = styled.div`
    background: linear-gradient(to top right, #a84, #a89);
`

export default PrivateLayout
