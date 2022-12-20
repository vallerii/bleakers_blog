import BlogLayout from "../ui/blog_layout";
import BlogTags from "./blog_tags";
import Posts from "./posts";

const Blog = ({posts}) => {
  return (
    <BlogLayout>
      <BlogTags />
      <Posts posts={posts}/>
    </BlogLayout>
  );
};

export default Blog;
