import Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  author: Author
  content: string
}

export default PostType
