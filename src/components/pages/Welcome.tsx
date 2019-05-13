import * as React from 'react'

interface objUser {
  id: number,
  permission: boolean,
}

interface props {
 name?: string,
 user: objUser,
}
const Welcome: React.SFC<props> = ({
  name,
  user,
}) => {
 return <h1>Welcome back, {name || `#00${user.id}`}.</h1>
}

export default Welcome
