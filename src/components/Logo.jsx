import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div className="flex items-center justify-center bg-white rounded-full shadow-lg">
      <img className="w-auto h-12" src="../../static/images/pngwing.com.png" alt="logo" />
    </div>
  )
}

export default Logo
