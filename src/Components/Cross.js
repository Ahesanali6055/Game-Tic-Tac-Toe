import React from 'react'

function Cross(props) {
  return (
    <div>
      <button className="btn" onClick={() => props.onClick()}>{props.value}</button>
    </div>
  )
}
export default Cross;
