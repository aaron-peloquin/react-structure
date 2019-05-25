import React from 'react';
import './App.css';

import Welcome from './components/pages/Welcome'

// Bad pattern of having let outside of component and mutating inside. Props are not passed down to trigger a re-render
const user = {
    id: 5,
    permission: true,
    invisibleProp: 4444,
}

const App: React.FC = () => {
    return <Welcome
        name="Aaron"
        user={user}
    />
}

export default React.memo(App)
