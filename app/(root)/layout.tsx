import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

// This root layout.tsx renders homepage

type Props = {}

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default layout