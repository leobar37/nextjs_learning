import React from 'react'
import {useRouter} from 'next/router';
export default function Heroe() {
    const  router =  useRouter();

    return (
        <div>
           <h1> hello { router.query.heroe} with { router.query.pies}</h1>
        </div>
    )
}
