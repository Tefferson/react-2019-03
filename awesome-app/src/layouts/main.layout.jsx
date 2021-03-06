import React from 'react'
import styled from 'styled-components'

const MainLayout = ({ children }) => (
	<StyledContainer>{children}</StyledContainer>
)

const StyledContainer = styled.div`
	background: linear-gradient(to top right, #893, #398);
`

export default MainLayout
