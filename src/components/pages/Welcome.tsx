import * as React from 'react'

interface props {
 name: string,
}
const Welcome: React.SFC<props> = ({
  name,
}) => {
 return <h1>Hello, {name}</h1>;
}
