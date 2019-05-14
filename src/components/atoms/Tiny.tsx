import * as React from 'react'

const Tiny:
  React.SFC<{name: string}>
  = ({name}) =>
  {
    console.log('Tiny is rendering with no new props or parent state updating', name)
    return <div>I'm a tiny component with a {name} prop</div>
  }

export default React.memo(Tiny)
