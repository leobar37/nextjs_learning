import React from 'react';
import { Layout, List, Typography } from 'antd';
import { PlaceHolderApi } from 'services/PlaceHolder';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Ipost } from 'models/Post';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;
type IndexProps = {
  posts: Ipost[];
};

export const ItemList = ({ post }: { post: Ipost }) => {
  return (
    <List.Item style={{ marginLeft: '50px' }}>
      <Typography>
        <Link as={`/post/${post.id}`} passHref href={'post/[slug]'}>
          <a href="">{post.title}</a>
        </Link>
      </Typography>
    </List.Item>
  );
};

function Index({ posts }: IndexProps) {
  return (
    <div>
      <Layout
        style={{ maxWidth: '1000px', width: '1000px', margin: '20px auto' }}
      >
        <Header>
          <h1 style={{ color: 'white' }}> select posts</h1>
        </Header>
        <Content>
          <List
            header={<Typography.Title> lists of posts</Typography.Title>}
            className="list"
            style={{ maxHeight: '50vh' }}
            dataSource={posts}
            renderItem={(item) => <ItemList post={item} />}
          />
        </Content>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await PlaceHolderApi.posts();
  console.log('====================================');
  console.log('this is a server?');
  console.log('====================================');
  return {
    props: {
      posts: response.data,
    },
  };
};
export default Index;
