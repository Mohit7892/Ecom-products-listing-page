import React from 'react'

function Section({title, children}) {
  return (
    <div style={{padding:"10px", marginBottom:"5px"}}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  )
}

export default Section
