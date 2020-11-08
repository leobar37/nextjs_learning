/// ONE LEVEL -> ()

export default function initMiddleware(middleware){
 // TWO LEVEL -> ()
 
    return (req , res)=>{
    return new Promise( (resolve, reject)=>{
        middleware(req, res,  (result)=>{
           
            if(result instanceof Error){
                  return reject(result);
            }
         return resolve(result);
        })
  
    })         
 }
}