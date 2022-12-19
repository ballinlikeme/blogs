import Layout from "../Layout/Layout";
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
import CategoryCreator from "./CategoryCreator/CategoryCreator";
import postsErrorHandler from "../../utils/exceptions/postsErrorHandler";

const AdminPanel = observer(() => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState("Editor");
    const [categoryId, setCategoryId] = useState(null);

    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [contentError, setContentError] = useState(false);

    const memoizedEditorState = useMemo(() => customConvert(editorState), [editorState]);
    const memoizedTitle = useMemo(() => title, [title]);
    const memoizedDescription = useMemo(() => description, [description]);

    const user = auth.getUser();

    useEffect(() => {
        categories.setCurrentCategory({name: '', id: null})
    }, [categoryId])

    useEffect(() => {
        setTitleError(false)
        setDescriptionError(false)
        setContentError(false)
    }, [title, editorState, description])

    const submit = async () => {
        if (title.length === 0) return setTitleError(true)
        if (description.length === 0) return setDescriptionError(true)
        if (editorState.getCurrentContent().getPlainText().length === 0) return setContentError(true)
        try {
            const newPost = await postService.createPost(
                memoizedTitle,
                memoizedEditorState,
                user.email,
                memoizedDescription,
                user.id,
                categoryId
            )
            setEditorState(() => EditorState.createEmpty())
            setTitle('')
            setDescription('')
            return newPost
        } catch (e) {
            const errorMessage = e.response.data.message;
            postsErrorHandler(
                errorMessage,
                setTitleError,
                setDescriptionError,
                setContentError
            )
        }
    }

    if (type === "Editor") {
        return (
            <Layout>
                <Controls cb={setType} />
                <TitleEditor error={titleError} placeholder={"Title"} value={title} cb={setTitle}  />
                <DescriptionEditor error={descriptionError} placeholder="Description" value={memoizedDescription} cb={setDescription} />
                <DEditor error={contentError} setValue={setEditorState} value={editorState} />
                <Flex justify="space-between" margin="10px 0 0" align="flex-end">
                    <CategorySelector cb={setCategoryId} />
                    <SubmitButton cb={submit}>Create</SubmitButton>
                </Flex>
                <CategoryCreator />
            </Layout>
        )
    }

    return (
        <Layout>
            <Controls cb={setType} />
            <Preview title={memoizedTitle} description={memoizedDescription} content={memoizedEditorState} />
        </Layout>
    )
})

export default AdminPanel;