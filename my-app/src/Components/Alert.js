import React from 'react'

function Alert(props) {
  return (
   props.alert && <div className="alert alert-success" role="alert">
 
<strong>{props.alert.type}</strong> <strong>{props.alert.msg}</strong>
    <button type="button" className="btn-close" data-bs-dismiss="alert"
aria-label="Close"></button>

   </div>
  )
}

export default Alert
