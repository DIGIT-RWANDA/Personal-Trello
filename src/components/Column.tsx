import React, { PropsWithChildren } from 'react'
import { ColumnContainer, ColumnTitle } from '../styles'
import { AddNewItem } from "./AddNewItem";

interface ColumnProps {
    text: string
}

export const Column = ({ text, children }: PropsWithChildren<ColumnProps>):JSX.Element => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
            <AddNewItem
                onAdd={() => console.log('added')}
                toggleButtonText={'+ Add a new item '}
            />
        </ColumnContainer>
    )
}
