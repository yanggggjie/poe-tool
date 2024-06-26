import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { twMerge } from 'tailwind-merge'

function App() {
  const [isOn, setIsOn] = useState(true)
  const text = `   请始终用中文回答我`
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const [log, setLog] = useState('')

  useEffect(() => {
    if (!textAreaRef.current) {
      textAreaRef.current = document.querySelector(
        '.GrowingTextArea_textArea__ZWQbP',
      ) as HTMLTextAreaElement
    }
    window.addEventListener('keyup', (ev) => {
      setLog(ev.key)
      if (textAreaRef.current) {
        if (!textAreaRef.current?.value.startsWith(text)) {
          textAreaRef.current!.value = text + textAreaRef.current!.value
        }
      }
    })
  }, [isOn])

  return (
    <div
      className={twMerge('fixed  right-1/2  top-1/2 -translate-y-1/2 bg-white')}
    >
      <button
        onClick={() => {
          setIsOn(!isOn)
        }}
      >
        {isOn ? 'on' : 'off'}
      </button>
      <div>log:{log}</div>
    </div>
  )
}

export default App
