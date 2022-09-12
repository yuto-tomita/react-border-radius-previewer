import React, { FC } from 'react'
import style from './InputRange.module.css'

interface Props {
	onChange: (arg: number) => void
  value: number
  className?: string
}

const InputRange: FC<Props> = ({
  onChange,
  value,
  className = ''
}) => {
  const parentClassName = className || ''
  return (
    <input
      type="range"
      onChange={(e) => onChange(Number(e.currentTarget.value))}
      value={value}
      // className="mb-6 w-full h-0.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      className={`${style} ${parentClassName}`}
      min="0"
      max="50"
    />
  )
}

export default InputRange