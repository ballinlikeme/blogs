import Grid from "./Grid";
import PostTile from "./PostTile/PostTile";

const Publications = ({publications}) => {
    return (
        <Grid>
            {publications.map(publication => {
                return <PostTile title={publication.title} description={publication.description} />
            })}
        </Grid>
    )
}

export default Publications;