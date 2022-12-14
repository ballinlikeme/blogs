import PageWrapper from "../styles/PageWrapper";
import Container from "../styles/Container";
import DEditor from "./Editor/Editor";
import Controls from "./Buttons/Controls";
import TitleEditor from "./TitleEditor";
import Preview from "./Preview";
import {EditorState} from "draft-js"
import {useState, useMemo} from "react"
import customConvert from "../../utils/customConvert";
import DescriptionEditor from "./DescriptionEditor";

const AdminPanel = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState("Editor");

    const memoizedEditorState = useMemo(() => customConvert(editorState), [editorState]);
    const memoizedTitle = useMemo(() => title, [title]);
    const memoizedDescription = useMemo(() => description, [description]);

    if (type === "Editor") {
        return (
            <PageWrapper>
                <Container width={"500px"}>
                    <Controls cb={setType} />
                    <TitleEditor placeholder={"Title"} value={title} cb={setTitle}  />
                    <DescriptionEditor placeholder="Description" value={memoizedDescription} cb={setDescription} />
                    <DEditor setValue={setEditorState} value={editorState} />
                </Container>
            </PageWrapper>
        )
    }

    return (
        <PageWrapper>
            <Container width="500px">
                <Controls cb={setType} />
                <Preview title={memoizedTitle} description={memoizedDescription} content={memoizedEditorState} />
            </Container>
        </PageWrapper>
    )

    
}

export default AdminPanel;