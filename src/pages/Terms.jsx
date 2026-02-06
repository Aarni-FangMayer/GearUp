import React from 'react'
import { Link } from 'react-router-dom';

const Terms = () => {
  return (  
    <div style={{ padding: "80px", textAlign: "center" }}>
      <h1>Terms of Service</h1>
      <p>Terms of Service text content</p>

      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Terms
