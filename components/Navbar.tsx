import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 bg-pink-600 border-crimson-500 py-5 text-green-500">
      <div className="flex-between mx-auto w-full max-w-screen-2xl bg-blue-900 px-5 xs:px-8 sm:px-16">
        <Link href='/'>
          <Image 
            src='https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif' 
            alt='logo'
            height={20}
            width={20}
          />
        </Link>

        <Image 
          src='https://img.icons8.com/ios/200/menu--v1.png'
          alt='hamburger-menu'
          className='block md:hidden'
          width={15}
          height={15}
        />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-10">
          <li className='body-text !font-bold'>
            <Link href='/' target='_blank'>
              Thermo nuclear
            </Link>
          </li>
          <li className='body-text !font-normal'>
            <Link href='/' target='_blank'>
              Arctic Gale
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar