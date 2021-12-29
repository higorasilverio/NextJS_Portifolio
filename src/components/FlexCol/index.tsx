import { memo } from 'react'

const FlexCol = ({ children }) => {
  return (
    <div className="flex flex-row xl:flex-col justify-evenly items-center w-full">{children}</div>
  )
}

export default memo(FlexCol)
