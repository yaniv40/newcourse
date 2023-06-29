import React from 'react'
import sv from '../svcollege.jpeg'
import header_logo from '../header.jpg'
import  '../App.css'
export default function Header() {
  return (
    <div className='headerLogo' style={{backgroundColor:'blue',display:'flex',justifyContent:'space-around',alignItems:'center'}} >
       <div id='logosv'>  <h1 style={{fontFamily:'revert',fontSize:'35px',color:'#e51f5d',textShadow:'5px 3px 8px #3ed0d1 ',textAlign:'center',fontWeight:'bolder'}}>  learning</h1><img id='sv' className='myImg' style={{width:'130px',height:'130px',borderRadius:'15px'}}   src={sv} alt="sv logo" /></div> 
        <h1 style={{fontFamily:'revert',fontSize:'55px',color:'#e51f5d',textShadow:'5px 3px 8px #3ed0d1 ',textAlign:'center',fontWeight:'bolder'}}>Graphic design course  ux\ui</h1>
      <div id='logodiv'> <h1 style={{fontFamily:'revert',fontSize:'35px',color:'#e51f5d',textShadow:'5px 3px 8px #3ed0d1 ',textAlign:'center',fontWeight:'bolder'}}> job</h1>  <img id='logo' className='myImg' style={{width:'130px',height:'130px',borderRadius:'15px'}}   src={header_logo} alt="header logo" /></div>
       
    </div>
  )
}
