import { memo } from 'react'

const FlexRow = ({ children }) => {
  return (
    <div className="flex flex-col xl:flex-row justify-evenly items-center w-full">{children}</div>
  )
}

export default memo(FlexRow)
