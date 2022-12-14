import { Editor, RichUtils } from "draft-js";
import EditorWrapper from "./EditorWrapper";
import PanelWrapper from "../PanelWrapper";
import Flex from "../../styles/Flex";
import "draft-js/dist/Draft.css";
import "../../../css/editor.css";
import blockRenderer from "../../../utils/blockRenderer";
import BlockStyleControls from "./Controls/BlockStyleControls";
import InlineStyleControls from "./Controls/InlineStyleControls";
import styleMap from "../../../utils/styleMap";
import EditorRoot from "./EditorRoot";

const DEditor = ({value, placeholder, setValue}) => {

    const {toggleBlockType, toggleInlineStyle} = RichUtils;

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(value, command);
    
        if (newState) {
          setValue(newState);
          return 'handled';
        }
    
        return 'not-handled';
    }

    const customClickBlockType = (blockType) => {
        const newValue = toggleBlockType(value, blockType)
        setValue(value => newValue)
    }

    const customClickInlineStyle = (blockType) => {
        const newValue = toggleInlineStyle(value, blockType)
        setValue(value => newValue);
    }

    return (
        <PanelWrapper>
            <EditorWrapper>
                <Flex direction="column" margin="0px 0px 20px">
                    <BlockStyleControls editorState={value} onClick={customClickBlockType}/>
                    <InlineStyleControls editorState={value} onClick={customClickInlineStyle} />
                </Flex>
                <EditorRoot>
                    <Editor
                        placeholder={placeholder}
                        handleKeyCommand={handleKeyCommand}
                        editorState={value}
                        onChange={setValue}
                        blockRendererFn={blockRenderer}
                        customStyleMap={styleMap}
                        spellCheck={true}
                    />
                </EditorRoot>
            </EditorWrapper>
        </PanelWrapper>
    )
}

export default DEditor