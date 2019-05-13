import React from 'react';
import './App.css';

import Welcome from './components/pages/Welcome'

const App: React.FC = () => {
  return (<Welcome user={{id: 5, permission: true}} />)
}

export default App
