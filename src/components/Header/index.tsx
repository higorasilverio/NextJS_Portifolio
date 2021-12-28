import { memo } from 'react'

const Header = ({ label }) => {
  return (
    <h1
      className="font-sans font-black text-5xl
        text-sky-700 lg:text-9xl md:text-8xl sm:text-7xl"
    >
      {label}
    </h1>
  )
}

export const MemoizedHeader = memo(Header)
