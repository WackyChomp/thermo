import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"


type Props = {}

const SearchForm = (props: Props) => {
  return (
    <form>
      <label>
        <Image
          src='https://img.icons8.com/ios/500/search--v1.png'
          alt='Search Icon'
          className='absolute left-8'
          width={32}
          height={32}
        />
        <Input />
      </label>
    </form>
  )
}

export default SearchForm