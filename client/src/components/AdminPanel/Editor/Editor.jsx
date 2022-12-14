import { Editor, RichUtils } from "draft-js";
import {convertToHTML} from "draft-convert";
import EditorButton from "./EditorButton";
import EditorWrapper from "./EditorWrapper";
import PanelWrapper from "../PanelWrapper";
import Flex from "../../styles/Flex";
import "draft-js/dist/Draft.css";
import "../../../css/editor.css";
import blockRenderer from "../../../utils/blockRenderer";
import customConvert from "../../../utils/customConvert";

const DEditor = ({value, placeholder, setValue}) => {

    const currentStyle = (param) => {
        console.log(value.getCurrentInlineStyle().has(param));
        return value.getCurrentInlineStyle().has(param)
    }

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(value, command);
    
        if (newState) {
          setValue(newState);
          return 'handled';
        }
    
        return 'not-handled';
    }

    const onBoldClick = () => {
        setValue(RichUtils.toggleInlineStyle(value, "BOLD"))
    }

    const onItalicClick = () => {
        setValue(RichUtils.toggleInlineStyle(value, "ITALIC"))   
    }

    const onHeadingTwoClick = () => {
        setValue(RichUtils.toggleBlockType(value, "header-two"))
    }

    const onHeadingThreeClick = () => {
        setValue(RichUtils.toggleBlockType(value, "header-three"))
    }

    const onBlockQuoteClick = () => {
        setValue(RichUtils.toggleBlockType(value, "blockquote"))
    }

    const onUnorderedListItemClick = () => {
        setValue(RichUtils.toggleBlockType(value, "unordered-list-item"));
    }

    const onOrderedListItemClick = () => {
        setValue(RichUtils.toggleBlockType(value, "ordered-list-item"));
    }

    const onCodeBlockClick = () => {
        setValue(RichUtils.toggleBlockType(value, "code-block"));
    }

    const onBrClick = () => {
        setValue(RichUtils.toggleBlockType(value, "br"));
    }

    return (
        <PanelWrapper>
            <EditorWrapper>
                <Flex gap={"10px"}>
                    <EditorButton cb={onBoldClick}>Bold</EditorButton>
                    <EditorButton cb={onItalicClick}>Italic</EditorButton>
                    <EditorButton cb={onHeadingTwoClick}>H2</EditorButton>
                    <EditorButton cb={onHeadingThreeClick}>H3</EditorButton>
                    <EditorButton cb={onBlockQuoteClick}>Blockquote</EditorButton>
                    <EditorButton cb={onUnorderedListItemClick}>UL</EditorButton>
                    <EditorButton cb={onOrderedListItemClick}>OL</EditorButton>
                    <EditorButton cb={onCodeBlockClick}>Code Block</EditorButton>
                    <EditorButton cb={onBrClick}>Br</EditorButton>
                </Flex>
                <Editor 
                    placeholder={placeholder}
                    handleKeyCommand={handleKeyCommand} 
                    editorState={value} 
                    onChange={setValue} 
                    blockRendererFn={blockRenderer}
                />
            </EditorWrapper>
            {customConvert(value)}
        </PanelWrapper>
    )
}

export default DEditor