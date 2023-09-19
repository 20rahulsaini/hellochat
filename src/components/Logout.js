import { Button } from '@mui/material'
import React from 'react'
import {auth} from '../firebase'


function Logout ()  {
  return (
    <div>
        <Button onClick={()=> auth.signOut()}  style={{color:"white" , fontWeight:"bold" , border:"1px solid black" , background:"#7b68ee"}} >Logout</Button>
    </div>
  )
}

export default Logout