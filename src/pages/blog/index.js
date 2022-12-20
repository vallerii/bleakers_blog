import { Blog } from "modules/blog/components";
import { Layout } from "modules/common/components";
import posts from "../../../contentful";

const Index = ({posts}) => {
  
  return (
    <Layout>
      <Blog posts={posts}/>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allposts = await posts.getEntries({
    content_type: 'post'
  });
  
  return {
    props: {
      title: 'bleaker blog',
      posts: allposts.items,
    }
  }
}