import React from 'react'
import "../css/Contact.css"

const Contact = () => {
  const Display=()=>{
    return alert("your massege is send")
  }
  return (
    <div className='Contact'>
      <div className='main'>
      <form>
      <h3>Contact Us</h3>
       <fieldset>
        
        <input type='text' placeholder='Enter your Name'/>
        <input type='email' placeholder='Enter your Email'/>
        <input type='text' placeholder='Enter your Number'/>
        <textarea type="text" rows="4" placeholder='your message'/>
        <input className='btn' type='button' value='Submit' onClick={Display}/>

       </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Contact