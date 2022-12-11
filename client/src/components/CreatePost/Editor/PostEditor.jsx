import React, {useRef} from "react";
import JoditEditor from "jodit-react";
import Input from "../Input/Input";

const PostEditor = ({id, content, setContent}) => {
    const editor = useRef(null)

    return (

            <JoditEditor
                value={content}
                onChange={newContent => setContent(newContent)}
                ref={editor}
                id={id}
            />
    )
}

export default PostEditor