import React from 'react'

// Definición del botón
const Button = ({ title = 'Button', color = 'blue', onClick }) => {
  return (
    <button 
      style={{ backgroundColor: color, color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
