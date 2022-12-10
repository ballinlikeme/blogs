import React, {useState} from "react"
import PostEditor from "./Editor/PostEditor";
import PageWrapper from "../styles/PageWrapper";
import Container from "../styles/Container";
import Label from "./Editor/Label";
import Input from "./Editor/Input";
import ResultField from "./Editor/ResultField";
import Flex from "../styles/Flex";
import Button from "./Editor/Button";

const CreatePost = () => {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('');
    return (
        <PageWrapper>
            <Container>
                <Label htmlFor="1">Post Title</Label>
                <Input handler={setTitle}  type="text" placeholder="Type here" id="1"/>
                <Label htmlFor="2">Post Content</Label>
                <PostEditor id="2" value={content} setValue={setContent} />
                <Flex direction="row-reverse" margin="10px 0px">
                    <Button>Create Post</Button>
                </Flex>
                <ResultField content={content} title={title} />
            </Container>
        </PageWrapper>
    )
}

export default CreatePost;