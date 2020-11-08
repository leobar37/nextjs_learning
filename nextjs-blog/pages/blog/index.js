import React from 'react'
import  Image from 'next/image';  

const PhotoCard =  (ph)=>{
     const photo  = ph.photo;
    return  <div>
           {
               photo.url ? <img src={photo.url}  width={500 + "px"} />  : <h1>not found</h1> 
           } 
          <h1>
               { photo.title}
          </h1>          
    </div>
}
export default function Blog({ photos}) {
    photos =  photos.slice(0 , 50);
    return (
        <div>
             {
                 photos.map( (photo  , i)=> <PhotoCard  key={i} photo={photo} / >   ) 
             }
             
            <h1>hello blog</h1>
        </div>
    )
}
export async function getStaticProps(context){
  const photos =   await fetch('https://jsonplaceholder.typicode.com/photos').then(data => data.json());
     
 return {
      props : {
        photos 
      }
 }    

}