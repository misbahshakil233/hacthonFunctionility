import React from 'react'

import HomeSection from '@/components/HomeSection'
import Editor from '@/components/Editor'
import Product from '@/components/Product'
import Classic from '@/components/Classic'
import Neural from '@/components/Neural'
import Cart from '@/components/Cart'
const page = () => {
  return (
    <div>
      <HomeSection />
      <Editor />
      <Product />
      <Classic />
      <Neural />
      <Cart />

    </div>
  )
}

export default page