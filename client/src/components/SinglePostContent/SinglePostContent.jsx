import { useEffect, useState } from "react";
import PageWrapper from "../styles/PageWrapper";
import Title from "./Title/Title";
import Text from "./Text/Text";
import Container from "../styles/Container";
import Description from "./Description/Description";
import { useParams } from "react-router";
import postService from "../../services/postService";
import categories from "../../store/categories";

const SinglePostContent = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    categories.setCurrentCategory("");
    postService.getSinglePost(id).then((result) => {
      setPost(result.data.post);
    });
  });

  return (
    <PageWrapper>
      <Container>
        <Title title={post.title} />
        <Description description={post.description} />
        <Text text={post.text} />
      </Container>
    </PageWrapper>
  );
};

export default SinglePostContent;
