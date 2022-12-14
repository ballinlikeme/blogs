import styled from "styled-components"

const StyledEditorRoot = styled.div`
  min-height: 100px;
`

const EditorRoot = ({children}) => {
    return <StyledEditorRoot>{children}</StyledEditorRoot>
}

export default EditorRoot;