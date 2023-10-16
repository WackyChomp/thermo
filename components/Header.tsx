import React from 'react'

interface Props{
  category: string;
  type?: string;
  query: string;
}

const Header = ({ category, type, query }: Props) => {
  if(category && query){
    return(
      <h1 className='self-start heading3 text-white-500'>
        Search results for "{query}" in <span className='text-yellow-400 capitalize'> {category} </span>
      </h1>
    )
  }

  if(category){
    return(
      <h1 className='self-start heading3 text-white-500'>
        Search results for <span className='text-yellow-400 capitalize'> {category} </span>
      </h1>
    )
  }
  if(query){
    return(
      <h1 className='self-start heading3 text-white-500'>
        Search results for "{query}" :
      </h1>
    )
  }

  return (
    <h1 className='self-start heading3 text-white-500'>Heading No Results...</h1>
  )
}

export default Header