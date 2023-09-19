import Register from "./components/Register"
import Chat from "./components/Chat";
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import "./App.css"



function App() {
  
  const[user] = useAuthState(auth)
  return (
   <>
   <h3 style={{color:"#7b68ee" , textAlign:"center" , fontFamily:"sans-serif" , fontSize:"30px" }} >Hellochat</h3>
   {user?<Chat />:< Register/> }
  
   
</>
  );
}

export default App;
