import React from 'react'
import './main.css'
import Button from '../components/button.jsx'

const Main = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Button 
        title="Click me" 
        color="blue" 
        onClick={() => alert('Button clicked!')} 
      />
      <Button 
        title="Dont Click me" 
        color="red" 
        onClick={() => alert('Button clicked!')} 
      />
      <Button 
        title="ninja" 
        color="black" 
        onClick={() => alert('NINJA')} 
      />
      <Button 
        title="Click me" 
        color="green" 
        onClick={() => alert('Terminating process')} 
      />
    </div>
  )
}

export default Main
