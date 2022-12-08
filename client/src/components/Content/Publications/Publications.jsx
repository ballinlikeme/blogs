import React, {useState, useEffect} from "react"
import Grid from "./Grid";
import PostTile from "./PostTile/PostTile";
import categories from "../../../store/categories";
import {observer} from "mobx-react-lite";
import {$host} from "../../../http/http";

const Publications = observer(() => {

    const [publications, setPublications] = useState([])
    const categoryId = categories.currentCategory.id;

    useEffect(() => {
        $host.post('/posts/getPostsInCategory', {
            categoryId
        })
            .then(result => setPublications(result.data))
    }, [categoryId]);

    return (
        <Grid>
            {publications.map(publication => {
                return <PostTile title={publication.title} description={publication.description} />
            })}
        </Grid>
    )
})

export default Publications;