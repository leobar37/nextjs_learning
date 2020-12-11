import React from "react";
import { Layout, List, Typography } from "antd";
import { PlaceHolderApi } from "services/PlaceHolder";
import {
  GetServerSideProps,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { Ipost } from "models/Post";
import Link from "next/link";
import { Row, Card, Col } from "antd";
const { Header, Content, Footer } = Layout;
type IndexProps = {
  posts: Ipost[];
};
const { Meta } = Card;
function Index({ posts }: IndexProps) {
  const reduceText = (text: string) => {
    return text.slice(0, 80) + "...";
  };
  return (
    <div>
      <Layout
        style={{ maxWidth: "1000px", width: "1000px", margin: "20px auto" }}
      >
        <Header>
          <h1
            style={{
              color: "white",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            {" "}
            select posts
          </h1>
        </Header>
        <Content>
          <Row
            wrap={true}
            gutter={10}
            justify="center"
            style={{ marginTop: "2rem" }}
          >
            {posts.map((post) => (
              <Col flex="15%" key={post.id}>
                <Link as={`/post/${post.id}`} href={"/post/[slug]"}>
                  <a href="">
                    <Card
                      hoverable
                      style={{ width: 250 }}
                      cover={<img src={post?.image} />}
                    >
                      <Meta title={post.title}></Meta>
                      {reduceText(post.body)}
                    </Card>
                  </a>
                </Link>
              </Col>
            ))}
          </Row>
          {/* <List
            header={<Typography.Title> lists of posts</Typography.Title>}
            className="list"
            style={{ maxHeight: '50vh' }}
            dataSource={posts}
            renderItem={(item , i) => <ItemList key={i} post={item} />}
          /> */}
        </Content>
      </Layout>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await PlaceHolderApi.posts();
  return {
    props: {
      posts: response,
    },
  };
};
export default Index;
