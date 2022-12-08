import React, {useEffect, useState} from "react";
import Container from "../styles/Container";
import PageWrapper from "../styles/PageWrapper";
import HeadLine from "./HeadLine/HeadLine";
import Publications from "./Publications/Publications";
import categories from "../../store/categories";
import {$host} from "../../http/http";
import {observer} from "mobx-react-lite";

const Content = observer(() => {

    const [amount, setAmount] = useState(0);
    const [publications, setPublications] = useState([]);

    const categoryId = categories.currentCategory.id;

    useEffect(() => {
        $host.post('/posts/getPostsInCategory', {
            categoryId
        })
            .then(result => {
                setPublications(result.data);
                setAmount(result.data.length)
            });
    }, [categoryId])

    return (
        <PageWrapper>
            <Container>
                <HeadLine amount={amount} />
                <Publications publications={publications} />
            </Container>
        </PageWrapper>
    )
})

export default Content;