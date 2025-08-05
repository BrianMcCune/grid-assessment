import { useState } from 'react'
import './App.css'

function App() {

  const [box, setBox] = useState<number>(2)
  const gridArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  const handleClick = (action: 'up' | 'down' | 'left' | 'right') => {
    setBox((prev) => {
      switch(action) {
        case 'up':
          return prev <= 2 ? prev + 6: prev - 3
          case 'down':
            return (prev + 3) % 9
        case 'left':
          return prev === 0 ? 8 : prev - 1
        case 'right':
          return (prev + 1) % 9
      }
    })
    console.log(box)
  }

  return (
    <div>
      <div className='grid'>
        {gridArray.map((id) => (
          box === id ? 
          <div id="selected" key={id}></div> :
          <div key={id}></div> 
        ))}
      </div>
      <button onClick={() => handleClick('up')}>Up</button>
      <button onClick={() => handleClick('left')}>Left</button>
      <button onClick={() => handleClick('right')}>Right</button>
      <button onClick={() => handleClick('down')}>Down</button>
    </div>
  )
}

export default App
