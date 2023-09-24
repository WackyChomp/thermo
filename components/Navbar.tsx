import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-crimson-500 py-5 text-slate-600">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-5 xs:px-8 sm:px-16">
        <Link href='/'>
          <Image 
            src='https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif' 
            alt='logo'
            height={20}
            width={20}
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar