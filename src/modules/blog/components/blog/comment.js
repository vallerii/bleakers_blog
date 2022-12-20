import {DiscussionEmbed} from "disqus-react"

const DisqusComments = ({ post }) => {
 const disqusShortname = "stahlwalkercookbook"
 const disqusConfig = {
   url: `https://cookblog.vercel.app/posts/${post.slug}`,
   identifier: post.slug, // Single post slug
   title: post.title // Single post title
 }
 return (
   <div>
     <DiscussionEmbed
       shortname={disqusShortname}
       config={disqusConfig}
     />
   </div>
 )
}
export default DisqusComments;