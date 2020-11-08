
export default function handler (req ,  res) {
const { query  : {  slug } } =  req;
console.log("my slug the post  is: " + slug);
 res.end('post: ' +  slug);
}


