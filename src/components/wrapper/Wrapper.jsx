import React from 'react'

export default function Wrapper({children}) {
  return (
    <div className='max-w-280 m-auto'>{children}</div>
  )
}
