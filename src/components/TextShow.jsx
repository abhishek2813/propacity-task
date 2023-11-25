import React from 'react'

function TextShow({text}) {
  return (
    <div style={{padding:"1rem",backgroundColor:"white",color:'black', whiteSpace: "pre-line" }}>{text}</div>
  )
}

export default TextShow