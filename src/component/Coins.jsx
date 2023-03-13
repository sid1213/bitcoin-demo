import React, { useEffect, useState } from 'react'
import axios from "axios";
import Loader from "./Loader.jsx"
import {server} from "../index"
import EroorPage from './EroorPage.jsx';
import {Link} from "react-router-dom"
function Coins() {
const [color,setColor]=useState([500,300,300]);
const  [coin,setCoin]=useState([]);
const  [currency,setCurrency]=useState("₹");
const [currencyurl,setCurrencyurl]=useState("inr");
const [loader,stopLoader]=useState(false);
const [eroor,setEroor]=useState(false);
const [page,setPage]=useState(1)
const btn = new Array(10).fill(false);
const [btnsecond,setbtnColor]=useState(btn);
  btn[0]=true;
  useEffect(()=>{

    const fetchCoin = async ()=>{
      stopLoader(false);

      try {
         const {data}= await axios.get(`${server}/coins/markets?vs_currency=${currencyurl}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`);

      setCoin(data);
      stopLoader(true);
      // console.log(data);
      } catch (error) {
      stopLoader(true);
      setEroor(true);
      }
     

    }
    fetchCoin();
  },[currencyurl,currency,page]);
  if(eroor) return <EroorPage/>

  return (

    <div className='p-5'>
    <div className='space-x-5 space-y-5'>
      <button className= {`bg-red-${color[0]} p-5 hover:bg-red-500 `} onClick={()=>{
        setCurrencyurl("inr");
        setCurrency("₹");
        setColor([500,300,300]);
      }}>INR</button>
      <button className={`bg-red-${color[1]} p-5 hover:bg-red-500 `} onClick={()=>{
        setCurrencyurl("usd");
        setCurrency("$");
        setColor([300,500,300]);

      }}>USD</button>
      <button className={`bg-red-${color[2]} p-5 hover:bg-red-500 `} onClick={()=>{
        setCurrencyurl("eur");
        setCurrency("€");
        setColor([300,300,500]);

      }}>EUR</button>
    </div>
    <div className='flex flex-wrap justify-between'>

      {
        loader? (
        coin.map((i)=>{
           return <Link to={`/coins/${i.id}`}  className=" w-40 flex flex-col items-center shadow-sm shadow-slate-800 m-5 p-5" key={i.id}>
              <img src={i.image}  className="w-20" alt="" />
            <h1>{i.id}</h1>
            <h2>{currency}{i.current_price}</h2>
            </Link>
        })):<Loader/>
      }
    </div>

    <div className='flex w-full  flex-wrap justify-center'>
      {
        btn.map((element,index)=>{
          return(
            loader?  (
          <button key={index} className={`rounded bg-black m-3 hover:bg-black p-5 text-white`} onClick={()=>{
            setPage(index+1)
          }}>
              {index+1}
           </button>
           )
           :<Loader/>)
        })
      }
    </div>

    </div>
  )
}

export default Coins
