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
  },
  invisibleProp: any,
}> = ({ // This object is deconstructed into our variables we can use within the component
  name,
  message = 'Have a nice day',
  user: {
    id,
    ...otherUserKeys // This ... syntax is the `rest pattern`. It will catch all keys that were not deconstructed from the user object (permission & displayName), and assign them into `otherUserKeys`
  },
  // Note: The prop `invisibleProp` is not deconstructed or caught by a a restructuring (...), so it is essentially unavaible and ignored, even though its required by the interface - don't do this.
}) => {
  return <React.Fragment>
    <h1>Welcome back, {name || `User #${id.toString().padStart(2, '0')}`}..</h1>
    <p>
      {message}, {otherUserKeys.displayName}.<br />
      You do {otherUserKeys.permission && <strong>not </strong>}have permission.<br />
    </p>
 </React.Fragment>
}

export default React.memo(Welcome)
