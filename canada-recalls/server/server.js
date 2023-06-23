import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/req', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const response = await fetch(
        'https://recalls-rappels.canada.ca/sites/default/files/opendata-donneesouvertes/HCRSAMOpenData.json');
    const data = await response.text();
    
    res.send(data);

  } catch (error) {
    console.error('ERROR: ', error);
    res.status(500).send('Internal Server Error');
  }
  
});

const port = process.env.PORT || 5173;

app.listen(port, () => {
  console.log('Listening on port', port);
});
