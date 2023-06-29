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
        setError(null)
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

  const searchReq = (e) => {
    e.preventDefault()
    const arg = e.target.elements.searchBar.value
    if(arg == null || arg == '' || arg.replace(/\s/g,'') == '') {
      return window.alert('please ensure your criteria is not empty and try again.')
    }
    console.log(arg)
    setLoading(true)
    setJson('')
 
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5173/search/${arg}`);
        setJson(response.data);
        setError(null)
      } catch (error) {
        console.warn('ERROR: ', error);
        setError(error)
      } finally {
        setLoading(false)
        setIsLoaded(true)
      }
    };
    fetchData();
  
  }

  return (
    <>
      <HomepageHeader />
      <div className='main-container container'>
        <div className='search-container'>
          <h1 className='search-header'>SEARCH</h1>
          <p>Use the form below to filter your search</p>
          <div className='searchrow'>
          <form onSubmit={searchReq}>
            <input className='searchbar' id='searchBar' placeholder='Search...'></input>
            <button type='submit' className='searchbar-submit' id='searchBarSubmit'>&#128269;</button>
            </form>
            <p className='searchtext'>*Criteria may be case sensitive</p>
          </div>
        </div>
        <div className='container results-container'>
        <div className='row'>
          <div className='col-12 col-lg-3 '>
           <div className='primary-container'>
            <h3 className='filter-header'>FILTERS </h3>
            <a name='filter' className='primary'  onClick={() => req('/')}> <input type='radio' name='filter' className='primary-button clear-button'></input>All Results</a>
           </div>
            <div className='container'>
            <div className='row '>
                <div className='col-12 radio-container'>
                  <p className='filter-label'>Food</p>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Food')}></input>All Food</div>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Fruits and vegetables - Frozen')}></input>Frozen</div>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Fruits and vegetables')}></input>Fruits/Vegetables</div>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Candy, confectionary')}></input>Candy/Desserts</div>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Food - Beverages - Alcoholic')}></input>Alcohol</div>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Grain')}></input>Grains</div>
                </div>
                <div className='col-12 radio-container'>
                  <p className='filter-label'>Vehicles</p>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/vehicles')}></input>All Vehicles</div>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Car')}></input>Cars</div>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/A.T.V.,')}></input>A.T.V.</div>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Restricted-Use ')}></input>Off-Road Vehicles</div>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Motorhome')}></input>Motorhomes</div>
                </div>
                <div className='col-12 radio-container'>
                  <p className='filter-label'>Health</p>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/drug')}></input>Drug/Medication</div>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/health')}></input>Health/Medical</div>
                </div>
                <div className='col-12 radio-container'>
                  <p className='filter-label'>Consumer</p>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/consumer')}></input>Consumer Products</div>
                    <div className='col-12 filter-option'><input type='radio' name='filter' className='primary-button'  onClick={() => req('/Toys ')}></input>Toys</div>
                </div>
            </div>
            </div>
          </div>
        
          {/** handle any errors**/}
          {error == null ? null : <p className='error-code'>{error.response.status}  {error.code}</p>}
        <div className='col-9'>
        <div className='container recall-container'>
          <div className='row'>
          {json == '' || undefined ? null : 
            json.map((item, key) => {
              console.log(item, typeof item.NID)
              return (
              <DisplayItem 
                Title={item.Title} 
                NID={item.NID} 
                Issue={item.Issue} 
                updated={item['Last updated']}
                Product={item.Product}/>)})
                }
          </div>
          </div>
        </div>
        </div>
        </div>
          
          
      </div>
      {loading == true ? <CircularProgress style={{position: 'absolute', bottom: '50%', right: '50%'}}/> : null}
      <ItemModal  />
  </>
  );
}

export default App;
