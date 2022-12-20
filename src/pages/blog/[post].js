import PostDetail from "modules/blog/components/blog/post_detail";
import { Layout } from "modules/common/components";
import posts from "../../../contentful";

const Index = ({post}) => {
  return (
    <Layout>
      <PostDetail post={post} />
    </Layout>
  );
};

export default Index;

export const getStaticPaths = async () => {
  const postEntiers = await posts.getEntries({
    content_type: 'post',
    select: 'fields.slug'
  });
  
  return {
    paths: postEntiers.items.map(item => {
      return {
        params: {
          post: item.fields.slug
        }
      }
    }),
    fallback: true
  }
}

export const getStaticProps = async ({params}) => {
  const slug = Object.values(params);
  const postEntiers = await posts.getEntries({
    content_type: 'post',
    'items.fields.slug': slug
  });
  const post = postEntiers.items.find((item) => item.fields.slug === slug[0])

  return {
    props: {
     post: post
    }
  }
}