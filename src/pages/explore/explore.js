import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export const Explore = () => {
  return (
    <div className="w-full px-4 py-3">
      <div className="flex items-center gap-3 border border-gray-700 rounded-full px-4 py-3 bg-black focus-within:border-blue-500">
        <FaMagnifyingGlass className="text-gray-500" />

        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent text-white outline-none placeholder-gray-500"
        />
      </div>
    </div>
  )
}
