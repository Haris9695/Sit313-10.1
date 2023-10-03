import React from 'react';
import './Footer.css';







const Footer = () => {
    return(


        <>

<div className="footer-container" id='footerId'>

<div className="content-1">

<div className="sub-content-1">

<h2>Explore</h2>

<p>Home</p>

<p>Questions</p>

<p>Articles</p>

<p>Tutorials</p>

</div>

<div className="sub-content-1">

<h2>Support</h2>

<p>FAQs</p>

<p>Help</p>

<p>Contact Us</p>

</div>

<div className="sub-content-1">


<h2>Stay Connected</h2>
<img src={require('./Images/insta.jpg')} alt="burwood" />

<img src={require('./Images/facebook.jpg')} alt="burwood" />




</div>

</div>

<div className="content-2">

<h2>DEV@Deakin 2022</h2>

<div className="sub-content-2">

<p>privacy Policy</p>

<p>Terms</p>

<p>Code of Conducts</p>

</div>

</div>

</div>

</>

)

}


export default Footer