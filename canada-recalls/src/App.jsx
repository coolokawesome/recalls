import { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import DisplayItem from './DisplayItem';
import HomepageHeader from './HomepageHeader';
import ItemModal from './ItemModal';
import { useAtom } from 'jotai';
import {ModalState, ModalInfo, Json} from './Atoms';

function App() {
  const [json, setJson] = useAtom(Json);
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  //handle the loading states
  useEffect(() => {
    isLoaded == true ? setLoading(false) : null
  }, [isLoaded])
  useEffect(() => {
    setLoading(true)
    setJson('')
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5173/req`);
        setJson(response.data);
      } catch (error) {
        console.warn('ERROR: ', error);
        setError(error)
      } finally {
        setLoading(false)
        setIsLoaded(true)
      }
    };
    fetchData();
  }, [])

  //request All data
const req = (arg) => {
    setLoading(true)
    setJson('')
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5173/req${arg}`);
        setJson(response.data);
      } catch (error) {
        console.warn('ERROR: ', error);
        setError(error)
      } finally {
        setLoading(false)
        setIsLoaded(true)
      }
    };
    fetchData();
  };

  return (
    <div>
      <HomepageHeader />
      <div className='main-container'>
        <div className='search-container container'>
          <h1>SEARCH</h1>
          
          <div className='row searchrow'>
            <input className='col-12 col-lg-12 searchbar' placeholder='Search...'></input>
            <p className='searchtext'>*Criteria may be case sensitive</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <h3>Filters</h3>
            <div className='row'>
              <div className='col-12'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/')}></input><label>All Recalls</label></div>
                <div className='col-12 radio-container'>
                  <label>Food</label>
                  <div className='col-12'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/food')}></input>All Food</div>
                  <div className='col-12'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Fruits and vegetables - Frozen')}></input>Frozen Fruits/Vegetables</div>
                </div>
              <div className='col-12'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/vehicles')}></input>Vehicle Recalls</div>
              <div className='col-12'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/health')}></input>Health/Medical</div>
              <div className='col-12'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/consumer')}></input>Consumer Products</div>
              <div className='col-12'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/drug')}></input>Drug/Medication</div>
              <div className='col-12'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Make-Up')}></input>Cosmetics</div>
              <div className='col-12'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Toys ')}></input>Toys</div>
            </div>
          </div>
        
          {/** handle any errors**/}
          {error == null ? null : <p className='col-12 error-code'>{error.response.status}  {error.code}</p>}
        <div className='col-9'>
        <div className='container recall-container'>
          <div className='row'>
          {json == '' ? null :
            json.map((item, key) => {
              console.log(item, typeof item.NID)
              return (
              <DisplayItem 
                Title={item.Title} 
                NID={item.NID} 
                Issue={item.Issue} 
                updated={item['Last updated']}/>)})
                }
          </div>
          </div>
        </div>
        </div>
          
          
      </div>
      {loading == true ? <CircularProgress style={{position: 'absolute', bottom: '50%', right: '50%'}}/> : null}
      <ItemModal  />
  </div>
  );
}

export default App;
