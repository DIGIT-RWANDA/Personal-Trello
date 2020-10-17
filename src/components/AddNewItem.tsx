import React, { useState } from 'react'
import { AddItemButton } from "../styles";
import {NewItemForm} from "./NewItemForm";

interface AddNewItemProps {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = ({ onAdd, toggleButtonText, dark }:AddNewItemProps): JSX.Element => {
    const [showForm, setShowForm] = useState<boolean>(false)

    if (showForm) {
        return (
            <NewItemForm
                onAdd={text => {
                    onAdd(text)
                    setShowForm(false)
                }}
            />
        )
    }

    return(
        <AddItemButton
            dark={dark}
            onClick={() => setShowForm(true)}
        >
            {toggleButtonText}
        </AddItemButton>
    )
}
