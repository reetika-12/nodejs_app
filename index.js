const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000; // Choose the port you want to run the server on

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle user creation
app.post('/api/create-user', (req, res) => {
  // Extract data from the request body
  const { email, identities, displayName, objectId, givenName, surname, jobTitle, streetAddress, city, postalCode, state, country, extension_customAttribute1, extension_customAttribute2, step, client_id, ui_locales } = req.body;

  // Log the received data (for demonstration purposes)
  console.log('Received request body:', req.body);

  // Example of handling the received data
  // You can perform actions like saving to a database, logging, etc.

  // Respond with a success message
  // res.status(200).json({ message: 'User created successfully' });
  if(displayName=="niranjan" || displayName=="reetika")
  {
    // Example usage to get token and make a POST request to create a user
  async function createUser() {
    try {
      // const token = await getToken();
  
      const url = 'https://graph.microsoft.com/v1.0/users';
      const body = {
        accountEnabled: true,
        displayName: {displayName},
        mailNickname: 'reet',
        passwords: [{ 'password': 'Reetika0112@' }],
        identities:[
        {
            "signInType":"userName",
            "issuer":"visionettest.onmicrosoft.com",
            "issuerAssignedId":"Reetika29"
        },
        {
            "signInType":"phoneNumber",
            "issuer":"visionettest.onmicrosoft.com",
            "issuerAssignedId":"738071394"
        },
        {
            "signInType": "emailAddress",
            "issuer": "visionettest.onmicrosoft.com",
            "issuerAssignedId": "reetika.singh05@gmail.com"
        }
      ]
      };
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IjlhWjhkaXpfTWhEOW1KbnNNQ1JjSS1YaUNMSlh2M1puWXZ2amFCTHVwWTQiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZDljZjAyZS1mOTRmLTQxZDktOTRmOC05YmE2YzFiMjY0MzQvIiwiaWF0IjoxNzIwMDgzNTMwLCJuYmYiOjE3MjAwODM1MzAsImV4cCI6MTcyMDA4NzQzMCwiYWlvIjoiRTJkZ1lPam1OUGd5SnlrLzg4OVMyNmhyVytKMUFBPT0iLCJhcHBfZGlzcGxheW5hbWUiOiJDSEctdGVzdCIsImFwcGlkIjoiNGI1ZWU2MWYtODUzNS00NWMwLTg4NWQtODZjMDI0OGM4OTdlIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGQ5Y2YwMmUtZjk0Zi00MWQ5LTk0ZjgtOWJhNmMxYjI2NDM0LyIsImlkdHlwIjoiYXBwIiwib2lkIjoiZjUxNDc4NDAtYjViZi00ZmY4LTg5MzYtN2JhODk5Yzc3Mjc1IiwicmgiOiIwLkFSVUFMdkNjVFVfNTJVR1UtSnVtd2JKa05BTUFBQUFBQUFBQXdBQUFBQUFBQUFDS0FBQS4iLCJyb2xlcyI6WyJVc2VyQXV0aGVudGljYXRpb25NZXRob2QuUmVhZC5BbGwiLCJVc2VyLlJlYWRXcml0ZS5BbGwiLCJVc2VyQXV0aGVudGljYXRpb25NZXRob2QuUmVhZFdyaXRlLkFsbCIsIkRpcmVjdG9yeS5SZWFkV3JpdGUuQWxsIiwiVXNlci5FbmFibGVEaXNhYmxlQWNjb3VudC5BbGwiLCJVc2VyLk1hbmFnZUlkZW50aXRpZXMuQWxsIl0sInN1YiI6ImY1MTQ3ODQwLWI1YmYtNGZmOC04OTM2LTdiYTg5OWM3NzI3NSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6IjRkOWNmMDJlLWY5NGYtNDFkOS05NGY4LTliYTZjMWIyNjQzNCIsInV0aSI6Ik0wVm1WNTAwR2t1Z001NnhlUGxQQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjA5OTdhMWQwLTBkMWQtNGFjYi1iNDA4LWQ1Y2E3MzEyMWU5MCJdLCJ4bXNfaWRyZWwiOiI3IDMwIiwieG1zX3RjZHQiOjE2ODMxMTc4MDh9.eTB5KOTeS137yVu6vZZtT2ftz2wspzzFxbXsC-YHx3FdwuQMRxIOv01Uiltar2Qz1446kyUeTSXlM7taXDp_jUYvo_futi48ZFQJd057CpX7WVGAdEikEbznQqvBA3wK9E09TNUee-uk4TL0IpKVk4LNV2EerYYMcIJEBEZyqF5E1O02oYfetf0If_Lk2OWlCljzgBRg4FH2TJmBOQxLBmiN8F16_Xp09MuFmLHqSHTopZMlj3_8Ogfz0vq3FolXZ_LFwzNia7lRIVU5LF630w3wynBoWutuFUTmj2dW9qFKEZ72vrDyPvXNILZx1CmfqfM-K_pXHgaf-R5mrc1ewQ`,
        },
        body: JSON.stringify(body),
      });
      console.log("res",res,"body",body);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const user = await response.json();
      console.log('User created:', user);
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  }

// Call the function to create a user
createUser();
    
    return res.json({
       action:'Continue',
       userMessage: "User is created Successfully! Go with MFA"
    })
    
  }
   return res.json({
      action:'ShowBlockPage',
       userMessage: "There was a problem with your request. You are not able to sign up at this time. Please contact your system people!"
    })
});
// POST endpoint to include data for user before sending the token 
app.post('/api/endpoint', (req, res) => {
    // Extract data from the request body
    const { clientId, step, ui_locales, email, identities, displayName, extension_customAttribute1, extension_customAttribute2 } = req.body;
  
    // Log the received data (for demonstration purposes)
    console.log('Received request body before generating token', req.body);
  
    // Example of handling the received data
    // You can perform actions like saving to a database, logging, etc.
  
    // Respond with a success message
    res.status(200).json({ message: 'Received and processed the data successfully' });
    return res.json({
        action:'Continue',
        userMessage: ""
     })
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
