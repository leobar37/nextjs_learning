

export default async function handler(req  , res){ 
const photos =  await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())

 res.statusCode = 200;
      res.setHeader('Content-Type' , 'application/json');
    res.end(JSON.stringify(photos))
}