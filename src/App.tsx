import React from 'react';
import './App.css';

import Welcome from './components/pages/Welcome'

const App: React.FC = () => {
  const [badNumber, setBadNumber] = React.useState(999)
  const welcomeProps = {
    name: 'Aaron',
    user: {
      id: 5,
      permission: true,
    },
    invisibleProp: ['foo', 'bar']
  }

  return (<React.Fragment>
    <button onClick={()=>{
      const number = Math.ceil(Math.random()*500)
      console.log({number})
      setBadNumber(number)
    }}>New Number</button>
    <p>Number is: {badNumber}</p>
    <Welcome {...welcomeProps} />
  </React.Fragment>)
}

export default App
