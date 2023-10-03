import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Greeting from './Greeting';
import Signup from './Signup';
import Navbar from './Navbar';
import Pic from './Pic';

import Footer from './Footer';

function App() {
  const [text,setText] = useState('')
  const changeText = () => {
      setText(text)
  }
  return <div className= 'header-div'>

<Greeting/>
<Navbar/>
<Pic/>
  







   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <Signup/>
   <Login/>

   <Footer/>
  </div>
}

export default App;
