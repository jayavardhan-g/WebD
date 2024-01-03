import React from 'react'

const Alert = (props) => {
    let id=props.id;
    let type=props.alert_type;
  return (
    <li className='list-group-item'>
      <h1>{id}</h1>
      <h2>{type}</h2>
      
    </li>
  )
}

export default Alert
