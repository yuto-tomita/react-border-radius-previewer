import { useState } from 'react'
import { InputRange } from '@/components/ui'
import './App.css'

export const App = () => {
  const [top, setTop] = useState(0)
  const [right, setRight] = useState(0)
  const [left, setLeft] = useState(0)
  const [bottom, setBottom] = useState(0)

  const [codeHover, setCodeHover] = useState(false)
  const [displayClipBoard, setDisplayClipBoard] = useState(false)

  const onChangeTop = (e: number) => {
    setTop(e)
  }

  const onChangeRight = (e: number) => {
    setRight(e)
  }

  const onChangeLeft = (e: number) => {
    setLeft(e)
  }

  const onChangeBottom = (e: number) => {
    setBottom(e)
  }

  const userSelectBorderRadius = { borderRadius: `${top}% ${right}% ${bottom}% ${left}%` }

  const onHover = () => {
    setCodeHover(true)
  }

  const onLeave = () => {
    setCodeHover(false)
  }

  const sleep = (waitTime: number) => new Promise((resolve) => setTimeout(resolve, waitTime))

  const onClickClipBoard = async() => {
    setDisplayClipBoard(true)
    await setClipboard()
    await sleep(1500)

    setDisplayClipBoard(false)
  }

  const setClipboard = async () => {
    const type = 'text/plain'
    const clipboardData = ` border-radius: ${top}% ${right}% ${bottom}% ${left}%`
    const blob = new Blob([clipboardData], { type })
    const data = [new ClipboardItem({ [type]: blob })]

    try {
      await navigator.clipboard.write(data)
    } catch {
      alert('コピーに失敗しました。')
    }
  }

  return (
    <div className="h-screen">
      <h1 className="text-center">
        BorderRadiusPreviewer
      </h1>
      <div className="relative mx-auto h-96 w-64">
        <InputRange
          onChange={onChangeTop}
          value={top}
          className="absolute left-8 top-8"
        />
        <InputRange
          onChange={onChangeRight}
          value={right}
          className="absolute left-40 top-40 rotate-90"
        />
        <InputRange
          onChange={onChangeLeft}
          value={left}
          className="absolute -left-24 top-40 rotate-90"
        />
        <InputRange
          onChange={onChangeBottom}
          value={bottom}
          className="absolute top-72 left-8"
        />
        <div
          className="box-position absolute left-11 border-2 border-gray-400"
          style={userSelectBorderRadius}
        />
      </div>
      <div
        className='relative m-auto w-2/4'
        onMouseEnter={() => onHover()}
        onMouseLeave={() => onLeave()}
      >
        <pre className="mx-4 bg-slate-800 p-10">
          <p className="text-stone-100">{`border-radius: ${top}% ${right}% ${bottom}% ${left}%;`}</p>
        </pre>
        <img
          src="src/assets/clipboard.svg"
          className={`absolute right-8 top-4 w-5 cursor-pointer opacity-0 ${codeHover ? 'opacity-100' : ''}`}
          onClick={() => onClickClipBoard()}
        />
        {
          displayClipBoard ? (
            <span className="absolute right-2 top-8 p-4 text-sm text-white">コピーしました!</span>
          ) : (
            <></>
          )
        }
      </div>
    </div>
  )
}

export default App
