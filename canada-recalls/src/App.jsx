import { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import DisplayItem from './DisplayItem';
import HomepageHeader from './HomepageHeader';
function App() {
  const [json, setJson] = useState('');
  const [loading, setLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  //handle the loading states
  useEffect(() => {
    isLoaded == true ? setLoading(false) : null
  }, [isLoaded])
  //request the data from the back-end
const req = () => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5173/req');
        setJson(response.data);
        
      } catch (error) {
        console.warn('ERROR: ', error);
        setError(error)
      } finally {
        setIsLoaded(true)
      }
    };
    fetchData();
  };


  return (
    <div>
      <HomepageHeader />
      <div className='main-container'>
        {isLoaded == false ? 
        <button className='primary-button'  onClick={req}>Load All Recalls</button> :
        <button className='primary-button' disabled onClick={req}>Load All Recalls</button> }
        {
          error == null || error.hasOwnProperty(!error.code) ? null : <p className='col-12 error-code'>{error.response.status}  {error.code}</p>
        }
        
        {loading == true ? <CircularProgress /> : null}
        {json == '' ? null:
        <div className='container recall-container'>
        <div className='row'>
        {
        json.map((item, key) => {
          console.log(item)

          return (
          item.Category.includes('Vehicles') ? <DisplayItem Title={item.Title} NID={item.NID} Issue={item.Issue} updated={item['Last updated']}/> : null
          )
        })}
        </div>
        </div>}
      </div>
  </div>
  );
}

export default App;
