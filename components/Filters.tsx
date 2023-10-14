'use client'
import { useState } from "react";
import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams, useRouter } from 'next/navigation'

const links = ['All', 'Analysis', 'Designs', 'Tools', 'Other']



const Filters = () => {

  const [active, setActive] = useState('');

  const searchParams = useSearchParams();

  const router = useRouter();

  const handleFilter = ( link:string ) => { 
    let newUrl = '';
    
    if (active === link) {
      setActive('');
        
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: null,
      })
    } else{
      setActive(link);
        
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: link.toLowerCase(),
      })
    }

    router.push(newUrl, { scroll: false })
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