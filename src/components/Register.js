import React from 'react'
import firebase from "firebase/compat/app"
import {auth} from "../firebase.js"
import {Button} from "@mui/material"

const Register = () =>{
  function signwithgoogle(){
const provider = new firebase.auth.GoogleAuthProvider()
auth.signInWithPopup(provider)
  }
  return (
    <div>
 

      <Button onClick={signwithgoogle} style={{color:"white" , fontWeight:"bold" , border:"1px solid black" , background:"#7b68ee"}} >SignIn with Google</Button>
    </div>
  )
}

export default Register

