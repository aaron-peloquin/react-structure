import * as React from 'react'
import Tiny from "./../atoms/Tiny"

interface objUser {
  id: number,
  permission: boolean,
}

// `React.SFC` is a "Stateless Functional Component" interface
const Welcome: React.SFC<{ // This object is the interface that defines our prop types
  name?: string,
  message?: string,
  user: {
    id: number,
    permission: boolean,
    displayName?: string,
    invisibleProp: any,
  },
}> = ({ // This object is deconstructed into our variables we can access from within the component
  name,
  message = 'Have a nice day',
  user: { // by destructuring `user` here, we no longer have access to `user` in our component
    id,
    ...otherUserKeys // This `...{variableName}` syntax is the `rest pattern`. It will catch all keys that were not deconstructed from the user object (permission & displayName), and assign them into `otherUserKeys`
  },
}) => {
  console.log('Rendering <Welcome />', otherUserKeys.invisibleProp)
  return <React.Fragment>
    <h1>Welcome back, {name || `User #${id.toString().padStart(2, '0')}`}..</h1>
    <p>
      {message}, {otherUserKeys.displayName}.<br />
      You do {otherUserKeys.permission && <strong>not </strong>}have permission.<br />
    </p>
    <Tiny name="Tom" />
 </React.Fragment>
}

// Because this is a SFC, we can feel safe to memoize the results to skip some future re-render
export default React.memo(Welcome)
