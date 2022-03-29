import React from 'react'
import { useState } from 'react'

const Button = () => {
    const [first, setfirst] = useState(true)
    

    return (
      <div onClick={()=>setfirst(!first)}>
        {first ?(
            <button>Show add Task Bar</button>
         ) :(
          <button>Closed add Task Bar</button> 
        
          ) }
      </div>
    )
}

export default Button