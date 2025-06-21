import Search from '@/components/Search';
import Link from 'next/link';
import React from 'react'

export default function Custom404() {
  return (
    <div className='flex justify-center items-center'>
      <div className="w- flex flex-col">
        <p>Uh oh!</p>
        <p>Sorry, the page you were looking for was not found.</p>
        <Search />
        <Link href="/">Go back to Etsy.com</Link>
      </div>
    </div>
  );
}
