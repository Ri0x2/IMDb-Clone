
'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'
export default function NavBarItem({title , param}) {

    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
  return (
    <div>
        <Link className={`hover:text-amber-600 transition-all font-semibold 
            ${genre === param ? 'underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : '' }`} 
            href={`/?genre=${param} `}>{title}</Link>

    </div>
  )     
}