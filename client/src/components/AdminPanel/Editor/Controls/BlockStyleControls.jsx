import EditorButton from "../EditorButton";
import Flex from "../../../styles/Flex";

const BLOCK_TYPES = [
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
    {label: 'Br', style: 'br'},
]

const BlockStyleControls = ({editorState, onClick}) => {
    const selection = editorState.getSelection()
    const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

    return (
        <Flex gap="10px">
            {BLOCK_TYPES.map(type => (
                <EditorButton
                    key={type.label}
                    active={type.style === blockType}
                    style={type.style}
                    label={type.label}
                    onClick={onClick}
                />
            ))}
        </Flex>
    )
}

export default BlockStyleControls;