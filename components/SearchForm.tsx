'use client'

import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react'
import { formUrlQuery } from '@/sanity/utils'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

type Props = {}

const SearchForm = (props: Props) => {
  const [search, setSearch] = useState('');

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const delayDebounceFunction = setTimeout(() => {
    //console.log(search)

    let newUrl = '';

      if(search){
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: search,
        })
      } else{       // updates Url when removing search query
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }

      router.push(newUrl, {scroll:false})
    }, 300)
  
    return () => clearTimeout(delayDebounceFunction)
  }, [search])
  

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:mt-10 sm:px-5'>
      <label className='flex-center relative w-full max-w-3xl'>
        <Image
          src='https://img.icons8.com/ios/500/search--v1.png'
          alt='Search Icon'
          className='absolute left-3'
          width={32}
          height={32}
        />

        <Input 
          className='h-fit border-0 bg-black-400 py-6 pl-16 pr-8 text-white-800 !ring-0 !ring-offset-0' 
          type='text'
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  )
}

export default SearchForm