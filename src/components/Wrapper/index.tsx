import { memo } from 'react'

const Wrapper = ({ children }) => {
  return (
    <div
      className="flex w-full h-screen
      justify-center items-center bg-gradient-to-r
      from-sky-200 via-sky-100 to-sky-200"
    >
      {children}
    </div>
  )
}

export default memo(Wrapper)
