import React, { useEffect, useState } from "react";
import HeadLine from "./HeadLine/HeadLine";
import Publications from "./Publications/Publications";
import categories from "../../store/categories";
import { $host } from "../../http/http";
import { observer } from "mobx-react-lite";
import postService from "../../services/postService";
import Layout from "../Layout/Layout";

const Content = observer(() => {
  const [amount, setAmount] = useState(0);
  const [publications, setPublications] = useState([]);

  const categoryId = categories.currentCategory.id;

  useEffect(() => {
    postService.getPostsInCategory(categoryId).then((result) => {
      setPublications(result.data);
      setAmount(result.data.length);
    });
  }, [categoryId]);

  return (
    <Layout>
      <HeadLine amount={amount} />
      <Publications publications={publications} />
    </Layout>
  );
});

export default Content;
