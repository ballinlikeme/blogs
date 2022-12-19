import { useEffect, useState } from "react";
import postService from "../../../services/postService";
import Publications from "../../Content/Publications/Publications";
import HeadLine from "../../Content/HeadLine/HeadLine";

const RecentlyPublished = () => {
    const [posts, setPosts] = useState([])
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        postService.getAll()
            .then(result => {
                const postsData = result.data;
                const recentPosts = postsData.slice(-10);
                const amountOfPosts = recentPosts.length;
                setAmount(amountOfPosts);
                setPosts(recentPosts);
            })
        
    })

    return (
        <>
            <HeadLine amount={amount} title="Recently Published" />
            <Publications publications={posts} />
        </>
    )
}

export default RecentlyPublished;