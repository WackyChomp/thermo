import Image from 'next/image'
import { Button } from '@/components/ui/button'
import SearchForm from '@/components/SearchForm'

// This is the "Home" child that gets rendered in (root) layout.tsx

export default function Home() {
  return (
    <main>

      <div className="flex-center mx-auto w-full max-w-screen-2xl flex-col pt-20">
        <section className="paddings w-full">
          <div className="flex-center relative min-h-[300px] w-full flex-col rounded-xl bg-black-400 bg-banner5 bg-cover bg-center text-center">
            <h1 className="sm:heading1 heading2 mb-6 text-center text-green-500">Thermo</h1>
          </div>

          <SearchForm />

        </section>

          Filters
      </div>
      
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
