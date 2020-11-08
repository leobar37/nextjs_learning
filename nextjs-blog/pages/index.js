
import Link from 'next/link'
export default function Home() {

  return (
    <div>
       <nav>
           <li>
              <Link href="/blog/myslug/second/three"> 
              <a>/blog/myslug</a>
              </Link>
           </li>
           <li>
              <Link href={ {
                pathname : '/about',
                query : {
                    first : "mi first argument",
                    second : "my second argument"
                }
              }}> 
              <a>Go to pages/post/[pid].js</a>
              </Link>
           </li>
      </nav>
     <h1> 
       hello  world guys
     </h1>
  
    </div>
     
    ) 
}

