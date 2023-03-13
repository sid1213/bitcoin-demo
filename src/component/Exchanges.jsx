import React, { useEffect, useState } from 'react'
import {server} from '../index'
import axios from 'axios';
import Loader from "./Loader.jsx"
import ExchangeCard from "./ExchangeCard"
import EroorPage from './EroorPage';

export default  function Exchanges() {

  const [exchanges,setExchanges]=useState([]);
  const [loader,stopLoader]=useState(true);
  const [eroor,setEroor]=useState(false);
  useEffect(()=>{
    
    const fetchExchanges= async ()=>{
      try {
        const {data}= await axios.get(`${server}/exchanges`);
        setExchanges(data);
        stopLoader(false);
      } catch (error) {
        stopLoader(false);
        setEroor(true);
      }
    
    }
    fetchExchanges();
  },[])

if(eroor) return <EroorPage/>

return (
    <div className='flex flex-wrap justify-center items-center '>
      
      {
        loader?<Loader/>: (exchanges.map((i)=>{
              return <ExchangeCard  
              name={i.name}
              url={i.url}
              img={i.image}
              rank={i.trust_score_rank}
              key={i.id}
              />
        })
        )
      }
      
      
        
    </div>
  )
};






