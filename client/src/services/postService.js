import { $host } from "../http/http";

class PostService {
  async getPostsInCategory(categoryId) {
    const posts = await $host
      .post("/posts/getPostsInCategory", {
        categoryId,
      })
      .then((result) => result);
    return posts;
  }

  async getSinglePost(id) {
    const post = await $host
      .post("/posts/getOne", {
        id,
      })
      .then((result) => result);

    return post;
  }
}

export default new PostService();
