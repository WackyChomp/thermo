'use client'

const links = ['All', 'Analysis', 'Designs', 'Tools']

const Filters = () => {
  return (
    <ul className="flex-center mx-auto w-full max-w-full gap-2 overflow-auto py-12 body-text no-scrollbar sm:max-w-2xl">
      {links.map((link) => (
        <button
          className="whitespace-nowrap rounded-lg px-8 py-2.5 capitalize"
          key={link}
          onClick={()=> {}}
        >
          {link}
        </button>
      ))}
    </ul>
  )
}

export default Filters