import React from 'react'
import {useRouter} from 'next/router';
// import moduleName from 'st'
export default function Post() {
    const router = useRouter();
    const slug =  router.query.slug || [];
    console.log(router.query);
    console.log(slug );
    return (
        <div>
            <h1> hello  {slug.join('/') } </h1>
        </div>
    )
}
