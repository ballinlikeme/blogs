import Grid from "./Grid";
import PostTile from "./PostTile/PostTile";
import { Link } from "react-router-dom";

const Publications = ({ publications }) => {
  return (
    <Grid>
      {publications.map((publication) => {
        return (
          <Link to={`/post/${publication.id}`}>
            <PostTile
              title={publication.title}
              description={publication.description}
            />
          </Link>
        );
      })}
    </Grid>
  );
};

export default Publications;
