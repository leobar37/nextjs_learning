import React from 'react'

function Page({stars}) {
    return (
        <div>
          <h1> Next start : { stars}</h1>    
        </div>
    )
}


Page.getInitialProps =  async (ctx)=>{21
    
    const res =  await fetch('https://api.github.com/repos/vercel/next.js');
    console.log("GET INITIAL PROPS");
   const json =  await res.json(); 
   return { stars :   json.stargazers_count}
}

export default Page;
