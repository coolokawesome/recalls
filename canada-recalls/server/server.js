import express from 'express';
import fetch from 'node-fetch';

const app = express();
const API_URL = 'https://recalls-rappels.canada.ca/sites/default/files/opendata-donneesouvertes/HCRSAMOpenData.json'
app.get('/req', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    const first100Results = data.slice(0, 500);
    res.send(first100Results);
  } catch (error) {
    console.error('ERROR: ', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/req/food/', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try{
    const response = await fetch(API_URL);
    const data = await response.json();

    const filteredResults = data.filter(item => item.Category.includes("Food"))
    const slicedResults  = filteredResults.slice(0, 500)
    res.send(slicedResults )
  }
  catch(error) {
    console.error('ERROR: ' + error);
    res.status(500).send(error)
  }
})
app.get('/req/vehicles/', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try{
    const response = await fetch(API_URL);
    const data = await response.json();

    const filteredResults = data.filter(item => item.Category.includes("Vehicles"))
    const slicedResults  = filteredResults.slice(0, 500)
    res.send(slicedResults )
  }
  catch(error) {
    console.error('ERROR: ' + error);
    res.status(500).send(error)
  }
})
app.get('/req/health/', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try{
    const response = await fetch(API_URL);
    const data = await response.json();

    const filteredResults = data.filter(item => item.Category.includes("Health"))
    const slicedResults  = filteredResults.slice(0, 500)
    res.send(slicedResults )
  }
  catch(error) {
    console.error('ERROR: ' + error);
    res.status(500).send(error)
  }
})
app.get('/req/consumer/', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try{
    const response = await fetch(API_URL);
    const data = await response.json();

    const filteredResults = data.filter(item => item.Category.includes("Consumer"))
    const slicedResults  = filteredResults.slice(0, 500)
    res.send(slicedResults )
  }
  catch(error) {
    console.error('ERROR: ' + error);
    res.status(500).send(error)
  }
})
app.get('/req/:category', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const category = req.params.category;
    const filteredResults = data.filter(item => item.Category.includes(category));
    const slicedResults = filteredResults.slice(0, 500);

    res.send(slicedResults);
  } catch (error) {
    console.error('ERROR: ' + error);
    res.status(500).send(error);
  }
});


const port = process.env.PORT || 5173;

app.listen(port, () => {
  console.log('Listening on port', port);
});
