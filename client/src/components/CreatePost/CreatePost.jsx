import {useState, useMemo} from "react"
import categories from "../../store/categories";
import PostEditor from "./Editor/PostEditor";
import PageWrapper from "../styles/PageWrapper";
import Container from "../styles/Container";
import Preview from "./Preview/Preview";
import Flex from "../styles/Flex";
import TypeButton from "./TypeButton/TypeButton";
import Input from "./Input/Input";
import CategorySelector from "./CategorySelector/CategorySelector";
import SubmitButton from "./SubmitButton/SubmitButton";

const CreatePost = () => {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [type, setType] = useState('Editor')
    const [category, setCategory] = useState('');

    const memoizedContent = useMemo(() => content, [content])
    const memoizedTitle = useMemo(() => title, [title])

    if (type === "Preview") {
        return (
             <PageWrapper>
                 <Container>
                     <Flex align="center">
                         <TypeButton cb={setType}>Editor</TypeButton>
                         <TypeButton cb={setType}>Preview</TypeButton>
                     </Flex>
                     <Preview title={title} content={memoizedContent} />
                 </Container>
             </PageWrapper>
        )
    }
    return (
        <PageWrapper>
            <Container>
                <Flex align="center">
                    <TypeButton cb={setType}>Editor</TypeButton>
                    <TypeButton cb={setType}>Preview</TypeButton>
                </Flex>
                <Input type="text" placeholder="Post title" cb={setTitle} value={memoizedTitle} />
                <PostEditor id="2" content={memoizedContent} setContent={setContent} />
                <Flex justify="space-between" margin="10px 0px">
                    <CategorySelector setCategory={setCategory} />
                    <SubmitButton />
                </Flex>
            </Container>
        </PageWrapper>
    )
}

export default CreatePost;