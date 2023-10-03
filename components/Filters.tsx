'use client'
import { useState } from "react";

const links = ['All', 'Analysis', 'Designs', 'Tools']

const Filters = () => {

  const [active, setActive] = useState('');

  const handleFilter = ( link:string ) => { 
    setActive(link);
  }

  console.log({active})

  return (
    <ul className="flex-center mx-auto w-full max-w-full gap-2 overflow-auto py-12 body-text no-scrollbar sm:max-w-2xl">
      {links.map((link) => (
        <button
          className={`${active === link ? 'bg-blue-500' : ''} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
          key={link}
          onClick={()=> handleFilter(link)}
        >
          {link}
        </button>
      ))}
    </ul>
  )
}

export default Filters