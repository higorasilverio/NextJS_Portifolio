import { MemoizedButton } from '../src/components/Button'
import { MemoizedHeader } from '../src/components/Header'
import { memo } from 'react'

const Home = () => {
  return (
    <div
      className="flex w-full h-screen
      justify-center items-center bg-gradient-to-r
      from-sky-200 via-sky-100 to-sky-200"
    >
      <div
        className="flex flex-col justify-evenly
        items-center bg-white rounded-3xl w-10/12 sm:w-3/4 h-5/6 sm:h-4/6"
      >
        <MemoizedHeader label="Welcome" />
        <div className="flex flex-col xl:flex-row justify-evenly items-center w-full">
          <MemoizedButton label="Site Features" />
          <MemoizedButton label="Github Page" />
          <MemoizedButton label="Social Networks" />
          <MemoizedButton label="Contact Me" />
        </div>
      </div>
    </div>
  )
}

export default memo(Home)
