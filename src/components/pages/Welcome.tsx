import * as React from 'react'
import Tiny from './../atoms/Tiny'

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
    invisibleProp,
    ...otherUserKeys // The `...{variableName}` syntax is the `rest pattern`. It will catch all keys that were not deconstructed from the user object (permission & displayName), and assign them into `otherUserKeys`
  },
  // Note: The prop `invisibleProp` is not being deconstructed or caught by a a restructuring (...), so it is essentially unavaible and ignored, even though its required by the interface - don't do this.
  // Additionally, the `invisibleProp` data is being passed in as a reference to a let variable, which is being mutated. Since the reference is not updating, this component does not re-render
}) => {
  console.log('Rendering <Welcome />', invisibleProp)
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
