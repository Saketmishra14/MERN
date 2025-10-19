import React from 'react'
import Image from 'next/image'
import natureImage from '../../public/nature-image.avif'

const allusers = () => {
  return (
    <div>
      <Image src= {natureImage} alt='nature image ' width={500} height={500}/>
    </div>
  )
}

export default allusers