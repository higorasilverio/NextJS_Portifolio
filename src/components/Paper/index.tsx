import { memo } from 'react'

const Paper = ({ children }) => {
  return (
    <div
      className="flex flex-col justify-evenly
        items-center bg-white rounded-3xl w-10/12 sm:w-3/4 h-5/6 sm:h-4/6"
    >
      {children}
    </div>
  )
}

export default memo(Paper)
