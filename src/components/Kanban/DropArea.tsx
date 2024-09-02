'use client'

import React, { useCallback, useState } from 'react'

type props = {
  onDrop: () => void
}

const DropArea = ({ onDrop }: props) => {
  const [showDrop, setShowDrop] = useState(false)

  const handleDragEnter = useCallback(() => setShowDrop(true), [])
  const handleDragLeave = useCallback(() => setShowDrop(false), [])
  const handleDrop = useCallback(() => {
    onDrop()
    setShowDrop(false)
  }, [onDrop])

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragOver={e => e.preventDefault()}
      className={`mx-auto h-[30px] before:h-28 before:block bg-purple-500 rounded-full my-1  transition-opacity ${showDrop ? 'opacity-30' : 'opacity-0'
        }`}
    />
  )
}

export default DropArea