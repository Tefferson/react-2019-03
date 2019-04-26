import React from 'react'
import styled from 'styled-components'

const PrivateLayout = ({ children }) => (
	<StyledContainer>{children}</StyledContainer>
)

const StyledContainer = styled.div`
	background: linear-gradient(to top right, #2a9, #666);
`

export default PrivateLayout
