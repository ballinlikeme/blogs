import React, { useEffect, useState } from "react";
import HeadLine from "./HeadLine/HeadLine";
import Publications from "./Publications/Publications";
import categories from "../../store/categories";
import { observer } from "mobx-react-lite";
import postService from "../../services/postService";
import Layout from "../Layout/Layout";
import {useLocation} from "react-router";
import {toJS} from "mobx";

const Content = observer(() => {
  const [amount, setAmount] = useState(0);
  const [publications, setPublications] = useState([]);

  const location = useLocation()
  const categoryName = location.pathname.substring(1)
  const currentCategory = categories.getCategory(categoryName);

  const categoryId = categories.currentCategory.id || currentCategory.id;

  useEffect(() => {
    if (!categories.currentCategory.id) {
      categories.setCurrentCategory(currentCategory)
    }
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
