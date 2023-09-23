import React from 'react'

type Props = {}

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
    Navbar
    {children}
    Footer
    </>
  )
}

export default layout