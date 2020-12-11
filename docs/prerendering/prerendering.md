## what is prerendering

**pre-rendering** is a web browser
feauture that speers up your
web-surfing experience

When you view a web page, some content from another page or site might be prerendered in anticipation of you going there next.

If you do, the new page loads very quickly because some of its elements were rendered ahead of tim

## in next js

If you export an async function called getStaticProps from a page, Next.js will pre-render this page at build time using the props returned by getStaticProps

```js
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
```

## context

_you should use this together with `getStaticPaths`_

**getStaticProps:** should return an object
with

**props:**
A required object with the props
that will be received by the page component

## incremental static Regeneration

incremental Static Regeneration allows you
update existing pages by re-rendering them in
the background as traffic comes in

```js
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default Blog;
```

now the list of blog posts will be revalidated once
per second, if you add a new blog post , it
will be almost immediately, without having rebuild
app or make a new deployme

this workd perfectly with `fallback : true`

Because `getStaticProps` runs build time does not receive data
thats only avalibel during request time,

## Write server-side code directly

Note that getStaticProps runs only on the server-side
It will never be run on the client-side.
https://next-code-elimination.now.sh/

## getStaticProps

next js will run your code at
build time ant
then remove data fetching code
from the final bundle

> **note:**
> when a page with `getStaticProps` is pre-renderes at build time,
> in addition to the page html file,
> next js generates a json file holding the
> result of runnig

When you navigate to a page that’s pre-rendered using getStaticProps, Next.js fetches this JSON file (pre-computed at build time) and uses it as the props for the page component.

**this meands that client-side page transitions will not calll `getStaticProps` as only the exported JSON is used**

## getStaticPaths (static generation)

if pages has dynamic routes and uses `getStaticProps` it needs
define a lis of paths that have tobe renderes to html at build
time

> if you export an `async` function called `getStaticPaths` from
> page that uses dynamic routes, next js will statically pre-render all the
> paths specified by `getStaticPaths`

**example:**

```js
export async function getStaticPaths() {
  return {
    paths: [
      { params: {
          id :  1 ,
       } } ,
        { params: {
          id :  2 ,
       } }// See the "paths" section below
    ],
    fallback: true or false // See the "fallback" section below
  };
}
```

### fallback

The object returned by getStaticPaths must contain a boolean fallback key.

**fallback== false :**
then any paths not returned by `getStaticPaths` will
result in a **404 page**

**example:**

```js
// pages/posts/[id].js

function Post({ post }) {
  // Render post...
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

export default Post;
```

**fallback==true:**

the path returned from `getStaticPaths`
will be returned to html at build time
by `getStaticProps`

the paths that have not been generated at build time will not
result in 404 page

> Next js will serve a `fallback` version
> of the page on the first rquest

**note**

when you use `getStaticProos` on page with dynamic route parameters
you must use `getStaticPaths`

## getServerSideProps (Server-side Rendering)

next js automatically extracted your code
into an Api endpoint. this api
endpoint is transparentely called during
a client side transition

si you export an `async` function called `getServerSideProps`
form a page, Next js will pre-render this page
on each request using the data returned by `getServerSideProps`

**redirect:** An optional redirect to allow redirecting
to internal and external resources, it should match the shape
of `{destionation : String , permanents : boolean}`
