##  Basic api Routes 
API routes a straightforward solution to build your api
with nextjs 

any file inside the folder `pages/api`
is mapped to `/api/*` and will be treasted as 
Api endpoint instead `page`

### example

`pages/api/user.js`

```js

export default async function handler(req  , res){ 
const photos =  await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())
 console.log("with method" , req.method); 
 res.statusCode = 200;
      res.setHeader('Content-Type' , 'application/json');
    res.end(JSON.stringify(photos))
}
```

**req:**
object is created by http.Server 
or http.ClientRequest 
and passed as the first  argument to the request
and response event respectively.
*its may be used tro access response status, headers and data*

**listen parameters:**

`req.query: ` An object containig query string. Default
to `{}`

`req.body: ` an object containing the body parsed 
by `content-type`  or `null` 

`req.cookies: ` An object containing the cookies sent by
request . Default to `{}`

> note :  Every API route can export `config` object to change the default config, which are the following:

```js
export const config = {
     api : {
          bodyParser  :{
                  sizeLimit :  '1mb'
          }
     }
}

```

### external resolver
is an explicit flag that tells the server
that this route is being handled by external 
resolver like express or connect

```js
export  const config = {
    api : {
         externalResolver :  true
    }
}

```

## catch all api routes 

`pages/api/post/[..slug].js`
**example**
`pages/post/cuida/your/almd`
**result:**
```js
  { 
        slug :  [ "cuida" ,"your" , "almd"]
  }   
```

## optional catch all api routes

```js
{ } // GET `/api/post` (empty object)
{ "slug": ["a"] } // `GET /api/post/a` (single-element array)
{ "slug": ["a", "b"] } // `GET /api/post/a/b` (multi-element array)

```


# reponse helpers 

the response `res` include a set
express js  like methods to improve 
developer experience and increase the speed 
of creating Api endpoints , take a look 
following example   

```js

export default handler(req,  res){
      res.status(200).json({name :  "leobar37"})
}
```


res.status(code) - A function to set the status code. code must be a valid HTTP status code

res.json(json) - Sends a JSON response. json must be a valid JSON object

res.send(body) - Sends the HTTP response. body can be a string, an object or a Buffer

res.redirect([status,] path) - Redirects to a specified path or URL. status must be a valid HTTP status code. If not specified, status defaults to "307" "Found".