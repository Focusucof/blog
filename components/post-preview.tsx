import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  date: string
  author: Author
  slug: string
  number: number
}

const PostPreview = ({
  title,
  date,
  author,
  slug,
  number
}: Props) => {
  return (
    <section className="">
      <span>{"0x" + toHex(number++)+" "}</span> 
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="hover:underline">{title}</a>
      </Link>
    </section>
  )
}

// https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
function toHex(d: number) { // only support up to 4095 because of 2 hex bits
  return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

export default PostPreview
