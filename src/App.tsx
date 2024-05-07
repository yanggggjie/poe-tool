import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { twMerge } from 'tailwind-merge'

function App() {
  const [isOn, setIsOn] = useState(true)
  const text = `请始终用中文回答我    `
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const [log, setLog] = useState('')
  useEffect(() => {
    if (isOn) {
      textAreaRef.current = document.querySelector(
        '.GrowingTextArea_textArea__ZWQbP',
      ) as HTMLTextAreaElement
      if (textAreaRef.current) {
        if (!textAreaRef.current?.value.startsWith(text.trimEnd())) {
          textAreaRef.current!.value = text + textAreaRef.current?.value
        }

        textAreaRef.current?.addEventListener('focus', () => {
          if (!textAreaRef.current?.value.startsWith(text.trimEnd())) {
            textAreaRef.current!.value = text + textAreaRef.current?.value
          }
        })
      }
    }
  }, [])

  return (
    <div className={twMerge('fixed right-0  top-1/2 -translate-y-1/2')}>
      <button
        onClick={() => {
          setIsOn(!isOn)
        }}
      >
        {isOn ? 'on' : 'off'}
      </button>
      {/*<div>log:{log}</div>*/}
    </div>
  )
}

export default App
