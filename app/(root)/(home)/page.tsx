import Image from 'next/image'
import { Button } from '@/components/ui/button'
import SearchForm from '@/components/SearchForm'
import Filters from '@/components/Filters'
import { getCollections, getCollectionsPlaylist } from '@/sanity/actions'
import CollectionCard from '@/components/CollectionCard'
import Header from '@/components/Header'

// This is the "Home" child that gets rendered in (root) layout.tsx

export const revalidate = 900     // update server side rendering

interface Props{
  searchParams: { [key: string]: string | undefined }
}


export default async function Home({ searchParams } : Props) {
  console.log(searchParams)

  const collections = await getCollections({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1',
  })
  console.log(collections)

  const collectionsPlaylist = await getCollectionsPlaylist();
  console.log(collectionsPlaylist)

  return (
    <main>

      <div className="flex-center mx-auto w-full max-w-screen-2xl flex-col pt-20">
        <section className="paddings w-full">
          <div className="flex-center relative min-h-[300px] w-full flex-col rounded-xl bg-black-400 bg-banner5 bg-cover bg-center text-center">
            <h1 className="sm:heading1 heading2 mb-6 text-center text-green-500">Thermo</h1>
          </div>

          <SearchForm />
          <Filters />

        </section>

      </div>


      {(searchParams?.query || searchParams?.category) && (
        <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
          Heading Here
          <Header
            category= {searchParams?.category || '' }
            query= {searchParams?.query || ''}
          />

          Collections Section Here
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {collections?.length > 0 ? (
              collections.map((collection:any) => (
                <div>
                  <div>CollectionCard Component</div>
                  <CollectionCard
                    key={collection._id}
                    title={collection.title}
                    id={collection._id}
                    image={collection.image}
                    downloadNumber={collection.views}
                  />
                </div>
              ))
            ): (
              <p className='body-regular text-white-400'>
                No collections found
              </p>
            )}
          </div>
        </section>
      )}

      {collectionsPlaylist.map((item: any) => (
        <section key={item._id} className='flex-center mt-6 w-full flex-col sm:mt-20'>
          <h1 className='heading3 self-start text-blue-500'>{item.title}</h1>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">

              {item.collections.map((collection:any) => (
                <CollectionCard
                  key={collection._id}
                  title={collection.title}
                  id={collection._id}
                  image={collection.image}
                  downloadNumber={collection.views}
                />
              ))}
              
          </div>
        </section>
      ))}

      
      <div className="paddings">
        <div className="bg-yellow-300 rounded-xl pt-5">
          <div className="px-24 py-5">
            <h1 className='text-2xl underline'>Home Child 1</h1>
            <div className="flex gap-3 flex-col">
              <Button className='bg-blue-400'>1-Click Me</Button>
              <Button className='bg-red-400'>2-Click Me</Button>
              <Button className='bg-green-400'>3-Click Me</Button>
              <Button className='bg-purple-400'>4-Click Me</Button>
            </div>

            <h1 className='text-2xl underline pt-5'>Home Child 2</h1>
            <div className="grid gap-3 grid-rows-2 grid-flow-col">
              <Button className='bg-blue-400'>1-Click Me</Button>
              <Button className='bg-red-400'>2-Click Me</Button>
              <Button className='bg-green-400'>3-Click Me</Button>
              <Button className='bg-purple-400'>4-Click Me</Button>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
