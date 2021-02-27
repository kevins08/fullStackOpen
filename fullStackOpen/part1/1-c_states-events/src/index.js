import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({value}) => <div>{value}</div>

const Button = ({onClick, text}) => (
  <button onClick = {onClick} >
    {text}  
  </button>
)

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div> the app is used by pressing the buttons </div>
    )
  }

  return (
    <div>button press history: {allClicks.join(' ')}</div>
  )

}

const App = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAll ] = useState([])

  const handleLeftClick = () => {
    setLeft(left+1)
    setAll(allClicks.concat('L'))
  }
  const handleRightClick = () => {
    setRight(right+1)
    setAll(allClicks.concat('R'))
  }

  return (
    <>
      {left}
      <Button onClick={handleLeftClick} text={'left'} />
      <Button onClick={handleRightClick} text={'right'} />
      {right}
      <History allClicks={allClicks} />
    </>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)