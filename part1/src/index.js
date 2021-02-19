import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/kevins08">kevins08</a>
  </div>
  )
}

const App = () => {
  const name = 'Kevin'
  const age = 30

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Kira" age={age-1}/>
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

ReactDOM.render(  <App />, document.getElementById('root'))