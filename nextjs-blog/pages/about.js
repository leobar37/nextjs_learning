
import {useRouter} from 'next/router';
export default  function About(){
    const router = useRouter();
    console.log(router.query);
    return (
         <div>
             <h1>hello world</h1>
         </div>
    )
}