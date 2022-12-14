import {convertToHTML} from "draft-convert"

function customConvert(editorState) {
    return convertToHTML({
        blockToHTML: (block) => {
            if (block.type === "br") return <br />
        }
    })(editorState.getCurrentContent())
}

export default customConvert;