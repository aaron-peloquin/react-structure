import * as React from 'react'

interface objUser {
  id: number,
  permission: boolean,
}

/**
 * This style of types with `interface` can be exported and shared between components, but I think that is a bad pattern.
 * However, not exporting it would most likely be easier to read
 */
// interface props{
//   name?: string,
//   message?: string,
//   user: {
//     id: number,
//     permission: boolean,
//     displayName?: string,
//   },
//  }

// `React.SFC` is a "Stateless Functional Component" interface
const Welcome: React.SFC<{ // This object defines our prop types
  name?: string,
  message?: string,
  user: {
    id: number,
    permission: boolean,
    displayName?: string,
    invisibleProps?: {
      doesNotCauseReRender: boolean,
    }
  },
 }> = ({ // This object is deconstructed into our variables we can use within the component
  name,
  message = 'Have a nice day',
  user: {
    id,
    ...otherUserKeys
  },
}) => {
  // Note for `otherUserKeys`
  // This will catch all remaining keys that were not already destructured and throw them into this object.
  // Function components will only shallow compare when deciding if it should re-render, so changing `doesNotCauseReRender` does not trigger a new render of this component.
 return <React.Fragment>
   <h1>Welcome back, {name || `User #${id.toString().padStart(2, '0')}`}..</h1>
   <p>
    {message}, {otherUserKeys.displayName}.<br />
    You do {otherUserKeys.permission && <strong>not </strong>}have permission.</p>
 </React.Fragment>
}

export default React.memo(Welcome)
