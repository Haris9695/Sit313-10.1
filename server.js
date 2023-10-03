const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const cors = require("cors");
const mailchimp = require('@mailchimp/mailchimp_marketing'); 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());


mailchimp.setConfig({
  apiKey: '598b12ccc4858d0f5efe4cfe41862231-us21', 
  server: 'us21', 
});

app.get('/', (req, res) => {
  const user = {
    username: "Deakin",
    password: "123"
  };
  res.send(user);
});

app.post('/', async (req, res) => {
  const password = req.body.password;
  const username = req.body.username;

  
  const audienceId = '325a237f35'; 
  const userData = {
    email_address: username,
    status: 'subscribed', 
    merge_fields: {
      FNAME: 'John', 
      LNAME: 'Doe',  
    },
  };

  try {
    
    const response = await mailchimp.lists.addListMember(audienceId, userData);
    console.log('Successfully subscribed user:', response.email_address);
    res.status(200).json({ message: 'User subscribed successfully' });
  } catch (error) {
    console.error('Error subscribing user:', error);
    res.status(500).json({ error: 'Failed to subscribe user' });
  }
});

app.listen(8003, function () {
  console.log("Server is running on port 8003");
});
