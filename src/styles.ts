import styled from 'styled-components'

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
