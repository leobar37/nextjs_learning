import { NextPage } from 'next';
import { useRouter } from 'next/router';
const Post: NextPage = () => {
  const router = useRouter();
  console.log();

  return (
    <div>
      <h1>hello{router.query.slug}</h1>
    </div>
  );
};

export default Post;
