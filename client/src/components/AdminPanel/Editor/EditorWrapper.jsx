import styled from "styled-components";

const StyledEditorWrapper = styled.div`
font-family: Helvetica,sans-serif;
`

const EditorWrapper = ({children}) => {
    return <StyledEditorWrapper>{children}</StyledEditorWrapper>
}

export default EditorWrapper;