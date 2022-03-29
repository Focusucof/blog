import MoreStories from '../components/more-stories';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../types/post';
import Header from '../components/header';
import SocialHeader from '../components/socialsheader';

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const morePosts = allPosts.slice();
  return (
    <div className='center align-center'>
      <Head>
        <title>Devin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SocialHeader />
      <Header />
      <div className='post-list center align-center'>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </div>
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
  ]);

  return {
    props: { allPosts },
  };
};
