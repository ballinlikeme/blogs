import React, {useRef} from "react";
import JoditEditor from "jodit-react";

const PostEditor = ({id, value, setValue}) => {
    const editor = useRef(null)

    return (
            <JoditEditor
                value={value}
                onChange={newContent => setValue(newContent)}
                ref={editor}
                id={id}
            />
    )
}

export default PostEditor