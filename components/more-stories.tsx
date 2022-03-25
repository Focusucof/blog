import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  var i = 0;

  return (
    <section className="center posts">
      <div className="">
        {posts.map((post) => (
          <>
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            number={i++}
          />
          </>
        ))}
      </div>
    </section>
  )
}



export default MoreStories
