import React from 'react'
import { LayoutContext } from '../../contexts'
import { MainLayout, PrivateLayout } from '../../layouts'

const ChangeLayoutComponent = () => (
    <LayoutContext.Consumer>
        {({ changeLayout }) => (
            <div>
                <button onClick={() => changeLayout(MainLayout)}>
                    Layout principal
                </button>
                <button onClick={() => changeLayout(PrivateLayout)}>
                    Layout privado
                </button>
            </div>
        )}
    </LayoutContext.Consumer>
)

export default ChangeLayoutComponent
