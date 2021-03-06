import React, { PropsWithChildren } from 'react'
import { ColumnContainer, ColumnTitle } from '../styles'

interface ColumnProps {
    text: string
}

export const Column = ({ text, children }: PropsWithChildren<ColumnProps>):JSX.Element => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
        </ColumnContainer>
    )
}
