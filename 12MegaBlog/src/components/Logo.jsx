import React from 'react'
import Log1 from './Logo2.png'

function Logo({width = '100px'}) {
  return (
    <div className=''><img className='w-[70px] h-[40px] object-contain' src={Log1} alt="" width={width} /></div>
  )
}

export default Logo