import { memo } from 'react'

const Button = ({ label }) => {
  return (
    <button
      type="button"
      className="text-xl sm:text-2xl font-bold
            text-sky-700 bg-sky-200 border-solid
            border-2 border-sky-700 w-56 py-3 my-1 rounded-lg"
    >
      {label}
    </button>
  )
}

export const MemoizedButton = memo(Button)
