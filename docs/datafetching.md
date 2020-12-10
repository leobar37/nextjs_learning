## getInitialProps

is used to asynchronously fetch
some data which then populates

> for the initial page load `getInitialProps`
> will run on the server only , will the run on the client when
> navigation to a different route via the `next/link`

### context object

`getInitalProps` receives a single
argument called `context` it's an object
with the following properties

**pathname:** Current route. That is the path of the page
in `/page`
**query:** Query string section of URL parsed as an object
**asPath** of the actual path (including the query) shown in
the browser
**req:** Request Object (server only)
**res:** response obeject (server only)

### caveats

getInitial can not be used in children components, only
in the default export of every
page.

# GetStaticProps

(generación statica) recupera
datos en el momento de la compilación

suppose you want to build a web site that display
coronavirus stats.
the home page shows information for each
country with links to more details . All the
data comes from json file that you
can dowland from a public URL, the file is updated
once per day

you should use `getStaticProps` if :

- the data required to render the page is avalible
  at buld time ahead of users request

- the page must be pre-rendered (for SEO) and be very
  fast generates HTML and JSON files, both of which can be
  cached by CDN for performance
  **Example:**

```js
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
};
```
**InferGetStaticPropsTyp**  : if
your want typings for you props.


# getStaticPaths:
