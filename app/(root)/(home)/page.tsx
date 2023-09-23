import Image from 'next/image'
import { Button } from '@/components/ui/button'

// This is the "Home" child that gets rendered in (root) layout.tsx

export default function Home() {
  return (
    <div>
      <div className="bg-yellow-300">
        <h1 className='text-2xl underline'>Home Child 1</h1>
        <div className="flex p-3 space-x-3 flex-col">
          <Button className='bg-blue-400'>1-Click Me</Button>
          <Button className='bg-red-400'>2-Click Me</Button>
          <Button className='bg-green-400'>3-Click Me</Button>
          <Button className='bg-purple-400'>4-Click Me</Button>
        </div>

        <h1 className='text-2xl underline'>Home Child 2</h1>
        <div className="grid p-3 gap-3 grid-rows-2 grid-flow-col">
          <Button className='bg-blue-400'>1-Click Me</Button>
          <Button className='bg-red-400'>2-Click Me</Button>
          <Button className='bg-green-400'>3-Click Me</Button>
          <Button className='bg-purple-400'>4-Click Me</Button>
        </div>
      </div>
    </div>
  )
}
