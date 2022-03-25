import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
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
      {/* <p>0x00 <a href="./posts/0.html">picoCTF: asm1</a></p> */}
    </section>
    /* <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <Avatar name={author.name} />
    </div> */
  )
}

// https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
function toHex(d: number) { // only support up to 4095 because of 2 hex bits
  return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

export default PostPreview
