import React from 'react'

function Button(props) {
    const btn=''
    const buttonclass=`${props.book ?'flex justify-center w-44 h-10  bg-neutral-600 text-white pt-2 rounded-lg mt-2 mb-6':'flex justify-center w-44 h-10  bg-neutral-600 text-white pt-2 rounded-lg'}`
    console.log("BookNow",props.book)
    

  return (
    <div className='flex justify-center mt-10'>
        <button className={buttonclass} onClick={props.onClick} to={props.path} components={props.components}>{props.label}</button>
    </div>
  )
}

export default Button;