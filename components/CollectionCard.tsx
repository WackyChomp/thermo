import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
}

const CollectionCard = ({ id, title, image, downloadNumber } : Props) => {
  return (
    <Card className='w-full max-w-fit border-0 bg-red-900 m-4 sm:max-w-[350px]'>
      <Link href={`/collection/${id}`}>
      <CardHeader className='flex-center flex-col gap-2.5'>
        <div className="h-fit w-full">
          <Image
            src={image}
            alt={title}
            className='h-full rounded-md object-cover'
            width={400}
            height={450}
          />
        </div>
        <CardTitle className='text-yellow-400 paragraph-semibold line-clamp-1 w-full text-left'>{title}</CardTitle>
      </CardHeader>
      </Link>

      <CardContent className='flex-between mt-4 pt-0'>
        <div className='flex-center body-medium gap-1.5 text-blue-500'>
          <Image 
            src='https://img.icons8.com/ios/500/download--v1.png'
            alt='download-icon'
            width={18}
            height={18}
          />
          {downloadNumber}
        </div>
        <Link href={`/collection/${id}`} className='flex-center body-semibold gap-1.5 text-blue-500'>
          Download Now
          <Image 
            src='https://img.icons8.com/ios/500/arrow--v1.png'
            alt='download-icon'
            width={20}
            height={5}
          />
        </Link>
      </CardContent>
    </Card>
    
  )
}

export default CollectionCard