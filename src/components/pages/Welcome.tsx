import * as React from 'react'

interface objUser {
  id: number,
  permission: boolean,
}

// `React.SFC` is a "Stateless Functional Component" interface
const Welcome: React.SFC<{ // This object defines our prop types
  name?: string,
  message?: string,
  user: {
    id: number,
    permission: boolean,
    displayName?: string,
  },
 }> = ({ // This object is deconstructed into our variables we can use within the component
  name,
  message = 'Have a nice day',
  user: {
    id,
    ...otherUserKeys // See below where we are accessing `displayName` and `permission`
  },
}) => {
 return <React.Fragment>
   <h1>Welcome back, {name || `User #${id.toString().padStart(2, '0')}`}..</h1>
   <p>
    {message}, {otherUserKeys.displayName}.<br />
    You do {otherUserKeys.permission && <strong>not </strong>}have permission.</p>
 </React.Fragment>
}

export default React.memo(Welcome)
