import React from 'react';
import Link from 'next/link';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='text-white-800'>
      <div className="flex-between p-3 w-full gap-y-10 border-t-8 border-b-8 border-green-800 bg-black px-20 py-1 max-md:flex-col">
        <p>copyright © 2023 Thermo | All Rights Reserved</p>

        <div className="flex gap-x-9">
          <Link href='/terms-of-use'>Terms & Conditions</Link>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </div>
      </div>
      
      <div className="p-3">
        <div className="bg-black-400 text-red-900 w-max">
          <p className='flex-center text-pink-500'>Item Collections</p>
          <div className="grid grid-flow-col grid-rows-2 gap-5 p-5 max-md:grid-rows-1">
            <div className="bg-yellow-400 flex-center w-16 h-16">Item # 1</div>
            <div className="bg-red-400 flex-center w-16 h-16">Item # 2</div>
            <div className="bg-green-400 flex-center w-16 h-16">Item # 3</div>
            <div className="bg-blue-400 flex-center w-16 h-16">Item # 4</div>
            <div className="bg-purple-400 flex-center w-16 h-16">Item # 5</div>
            <div className="bg-pink-400 flex-center w-16 h-16">Item # 6</div>
          </div>
        </div>
      </div>
        
    </footer>
  )
}

export default Footer