import React from 'react';
import './App.css';

import Welcome from './components/pages/Welcome'

// Bad pattern of having let outside of component and mutating inside. Props are not passed down to trigger a re-render
let sneakyData = 5
const user = {
  id: 5,
  permission: true,
  invisibleProp: sneakyData
}

const App: React.FC = () => {
  const [badNumber, setBadNumber] = React.useState(999)
  sneakyData = badNumber

  const updateNumber = () => {
    const number = Math.ceil(Math.random()*500)
    setBadNumber(number)
  }

  console.log('Rendering <App /> with', badNumber)

  return (<React.Fragment>
    <button onClick={updateNumber}>New Number</button>
    <p>Number is: {badNumber}</p>
    <Welcome
      name="Aaron"
      user={user}
      
    />
  </React.Fragment>)
}

export default React.memo(App)
