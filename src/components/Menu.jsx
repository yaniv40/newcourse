
import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Menu() {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'10px' ,textAlign:'left'}}>
        <Link to={'cv'}><button className='button'>RESERCH</button></Link>
        <Link to={'software'}><button className='button' >SOFTWARE NEDDED </button></Link>
       
    </div>
  )
}
