import * as React from 'react'

interface objUser {
  id: number,
  permission: boolean,
}

const Welcome: React.SFC<{
  name?: string,
  other?: string,
  user: {
    id: number,
    permission: boolean,
    optional?: string,
  },
 }> = ({
  name,
  other = 'have a nice day',
  user,
}) => {
 return <h1>Welcome back, {name || `#00${user.id}`}.. {other}</h1>
}

export default Welcome
