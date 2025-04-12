
'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function SignIn() {
    const route= useRouter();
    return (
      <div style={{cursor:"pointer"}} onClick={()=>{
        route.push('/billing');
      }}>signin</div>
    )
}
