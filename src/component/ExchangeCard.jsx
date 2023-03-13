import React from 'react'

function ExchangeCard({name,url,img,rank,id}) {
  return (
    <a href={url} target="_blank"  className='border flex items-center flex-col border-red-500 p-5 w-48 m-5 bg-yellow-300'>
        <img src={img} key={id} className="w-1/2"/>
        <h1>{name}</h1>
        <h3>{rank}</h3>
    </a>
  )
}

export default ExchangeCard
