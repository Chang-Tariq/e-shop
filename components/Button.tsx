import React from 'react'

function Button({children}:{children:string}) {
  return (
        <button className="bg-gray-800 px-4 py-3 text-white rounded-md my-4 hover:bg-gray-900">{children}</button>
  )
}

export default Button
