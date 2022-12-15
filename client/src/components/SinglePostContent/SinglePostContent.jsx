import { useEffect, useState } from "react";
import Title from "./Title/Title";
import Text from "./Text/Text";
import Description from "./Description/Description";
import { useParams } from "react-router";
import postService from "../../services/postService";
import categories from "../../store/categories";
import Layout from "../Layout/Layout";

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
    <Layout>
      <Title title={post.title} />
      <Description description={post.description} />
      <Text text={post.text} />
    </Layout>
  );
};

export default SinglePostContent;
