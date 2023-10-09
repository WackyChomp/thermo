import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
}

const CollectionCard = ({ id, title, image, downloadNumber } : Props) => {
  return (
    <div>
      <Link href={`/collection/${id}`}>
        <Image 
          src={image}
          alt={title}
          className='h-full rounded-md object-cover'
          width={400}
          height={450}
        />
      </Link>
      <div>{title}</div>
      <div>{downloadNumber}</div>
    </div>
    
  )
}

export default CollectionCard