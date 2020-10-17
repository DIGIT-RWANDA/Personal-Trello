import styled from 'styled-components'

interface AddItemButtonProps {
    dark?: boolean
}

export const AppContainer = styled.div({
    alignItems: "flex-start",
    backgroundColor: "#3179ba",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    padding: 20,
    width: "100%"
})

export const ColumnContainer = styled.div({
    backgroundColor: "#ebecf0",
    width: 300,
    minHeight: 40,
    marginRight: 20,
    borderRadius: 3,
    padding: "8px 8px",
    flexGrow: 0
})

export const ColumnTitle = styled.div({
    padding: "6px 16px 12px",
    fontWeight: "bold"
})

export const CardContainer = styled.div({
    backgroundColor: "#fff",
    cursor: "pointer",
    marginBottom: "0.5rem",
    padding: "0.5rem 1rem",
    maxWidth: 300,
    borderRadius: 3,
    boxShadow: "#091e4240 0 1px 0 0"
})

export const AddItemButton = styled.button<AddItemButtonProps>({
    backgroundColor: "#ffffff3d",
    borderRadius: 3,
    border: "none",
    color: `${(props: { dark: boolean }) => props.dark ? '#000' : '#fff'}`,
    cursor: "pointer",
    maxWidth: 300,
    padding: "10px 12px",
    textAlign: "left",
    transition: "background 85ms ease-in",
    width: "100%",
    [`&:hover`]: {
        backgroundColor: "#ffffff52"
    }
})

export const NewItemFormContainer = styled.div({
    maxWidth: 300,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start"
})

export const NewItemButton = styled.button({
    backgroundColor: '#5aac44',
    borderRadius: 3,
    border: "none",
    boxShadow: "none",
    color: "#fff",
    padding: "6px 12px",
    textAlign: "center"
})

export const NewItemInput = styled.input({
    borderRadius: 3,
    border: "none",
    boxShadow: "#091e4240 0 1px 0 0",
    marginBottom: "0.5rem",
    padding: "0.5rem 1rem",
    width: "100%"
})

