import EditorButton from "../EditorButton";
import Flex from "../../../styles/Flex";

const INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'}
]

const InlineStylesControls = ({onClick, editorState}) => {
    const currentStyle = editorState.getCurrentInlineStyle();

    return (
        <Flex gap="10px">
            {INLINE_STYLES.map(type => (
                <EditorButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onClick={onClick}
                    style={type.style}
                />
            ))}
        </Flex>
    )
}

export default InlineStylesControls;