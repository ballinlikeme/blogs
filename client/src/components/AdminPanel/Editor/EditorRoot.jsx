import styled, {css} from "styled-components"

const StyledEditorRoot = styled.div`
  min-height: 100px;
  ${props => props.error && css`
    div.DraftEditor-root {
      border: 1px solid var(--help-color)
    }
  `}
`

const EditorRoot = ({children, error}) => {
    return <StyledEditorRoot error={error}>{children}</StyledEditorRoot>
}

export default EditorRoot;