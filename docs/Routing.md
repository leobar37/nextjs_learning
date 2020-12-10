## Routing

Next.js has file-system based router built on the
concept pages

cada archivo es una pagina he incluso
el anidamiento de carpetas sera una ruta

## Dinamycs routes

Defining routes by using predifined paths is not always
enough for complex applications. In next js
you can add brackets to page

> los parametros se pueden definir a travéz de [] en el nombre
> del archivo `pages/blog/[slug].js`

**asi se captaria en el componente**

```js
import React from 'react';
import { useRouter } from 'next/router';
export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1> hello {slug} </h1>
    </div>
  );
}
```

si se manda a travéz de la ruta mas parametros
estos se conbinan por ejemplo :
`pages/blog/mypost` dara como resultado lo siguiente

```js
{
  slug: 'mypost';
}
```

`pages/blog/mypost?category=nutrition`

su resultado sera el siguiente

```js
 { slug :  "mypost" , category  :  "nutrition"}

```

### multiple dinamyc route

segments work the same way
`pages/post/[pid]/[commennt].js`

## client side navigation(Link)

you can navigte between routes with
`import Link from 'next/link'`

```js
<Link href="/about">
  <a>Go to pages/post/[pid].js</a>
</Link>
```

**as** :
optional decorator for the path
that will be shown in the browser URL bar
**Link accepts object** :

```js
<Link
  href={{
    pathname: '/blog/[slug]',
    query: { slug: 'my-post' },
  }}
>
  <a>Blog Post</a>
</Link>
```

**passHref** :
forces `Link` to send `href` property to child,
defual if false
**Replace the Url instead of push**

the default behavior of the link
components is to `push` a new URL
int `history` stack. You can use the replace prop
prevent adding a new Entry as in the following

```jsx
<link href="/about" replace>
  <a>about us</a>
</link>
```

## catch all routes

**File**
`[..slug].js`
**capture**

```js
import React from 'react';
import { useRouter } from 'next/router';
export default function Post() {
  const router = useRouter();
  const slug = router.query.slug || [];
  console.log(router.query);
  console.log(slug);
  return (
    <div>
      <h1> hello {slug.join('/')} </h1>
    </div>
  );
}
```

## Caveats

Predifined routes take precedure over dinamycs
routes an dynamic routes over catch all routes
