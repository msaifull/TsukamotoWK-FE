import React from 'react'

function Title(props) {
  return (
    <h1>{props.title}</h1>
  )
}

Title.defaultProps = {
  title: 'saiful',
}

export default Title