import { Ipost } from "models/Post";
import {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { PlaceHolderApi } from "../../services/PlaceHolder";
import { Typography, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { Title, Paragraph, Text } = Typography;
import { Card, Result } from "antd";
import NextLink from "next/link";
import { Row } from "antd";

type postProps = {
  post?: Ipost;
};
const Post: NextPage<postProps> = ({ post }) => {
  const router = useRouter();
  /** example log variable  in the bro*/
  //   console.log(process.env.NEXT_PUBLIC_VARIABLETEST);

  if (!post) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className="container">
      <Card>
        <div className="post">
          <Title className="title">{post?.title + " " + post.id}</Title>
          <img src={post?.image} width={800} style={{ margin: "10px 0" }} />
          <Text className="body" style={{ width: "100%" }}>
            <NextLink href="/" replace>
              <Button
                type="default"
                style={{ margin: "50px 0" }}
                icon={<ArrowLeftOutlined />}
              >
                behind
              </Button>
            </NextLink>
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <Paragraph key={i}>{post?.body}</Paragraph>
              ))}
          </Text>
        </div>
      </Card>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  postProps,
  { slug: string }
> = async (
  ctx: GetServerSidePropsContext<{ slug: string }>
): Promise<GetServerSidePropsResult<postProps>> => {
  try {
    console.log("this is my enviroment", process.env.DB_HOST);
    const { params } = ctx;
    const post = await PlaceHolderApi.postById(Number(params?.slug));
    return {
      props: {
        post: post,
      },
    };
  } catch {
    ctx.res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default Post;
