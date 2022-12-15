import PageWrapper from "../styles/PageWrapper";
import Container from "../styles/Container";
import DEditor from "./Editor/Editor";
import Controls from "./Buttons/Controls";
import TitleEditor from "./TitleEditor";
import Preview from "./Preview";
import {EditorState} from "draft-js"
import {useState, useMemo, useEffect} from "react"
import customConvert from "../../utils/customConvert";
import DescriptionEditor from "./DescriptionEditor";
import Flex from "../styles/Flex";
import CategorySelector from "./Editor/CategorySelector/CategorySelector";
import SubmitButton from "./Editor/SubmitButton";
import postService from "../../services/postService";
import auth from "../../store/auth";
import categories from "../../store/categories";
import {observer} from "mobx-react-lite";

const AdminPanel = observer(() => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState("Editor");
    const [categoryId, setCategoryId] = useState(null);

    const memoizedEditorState = useMemo(() => customConvert(editorState), [editorState]);
    const memoizedTitle = useMemo(() => title, [title]);
    const memoizedDescription = useMemo(() => description, [description]);

    const user = auth.getUser();

    useEffect(() => {
        console.log(categoryId)
    }, [categoryId])

    const submit = async () => {
        const newPost = await postService.createPost(
            memoizedTitle,
            memoizedEditorState,
            "ROOT",
            memoizedDescription,
            user.id,
            categoryId
        )
        return newPost
    }

    if (type === "Editor") {
        return (
            <PageWrapper>
                <Container width={"500px"}>
                    <Controls cb={setType} />
                    <TitleEditor placeholder={"Title"} value={title} cb={setTitle}  />
                    <DescriptionEditor placeholder="Description" value={memoizedDescription} cb={setDescription} />
                    <DEditor setValue={setEditorState} value={editorState} />
                    <Flex justify="space-between" margin="10px 0 0" align="flex-end">
                        <CategorySelector cb={setCategoryId} />
                        <SubmitButton cb={submit}>Create</SubmitButton>
                    </Flex>
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
})

export default AdminPanel;