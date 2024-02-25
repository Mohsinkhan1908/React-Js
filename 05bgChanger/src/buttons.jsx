import React from 'react'
function Button({btnText, bgcolor}){
    return(
        <button className='bg-slate-500 border-2 border-yellow p-2 px-4 rounded-xl m-2'>{btnText}</button>
    )
}
export default Button