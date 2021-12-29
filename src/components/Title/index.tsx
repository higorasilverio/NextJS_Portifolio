import { memo } from 'react'

const Title = ({ label }) => {
  return (
    <h1
      className="font-sans font-black text-5xl
        text-sky-700 lg:text-9xl md:text-8xl sm:text-7xl"
    >
      {label}
    </h1>
  )
}

export default memo(Title)
