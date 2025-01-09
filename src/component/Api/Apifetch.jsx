import React, { useEffect, useState } from 'react'
import './Apifetch.css'
import axios from 'axios'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import 'react-lazy-load-image-component/src/effects/blur.css';

const Apifetch = () => {
    const [data ,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [search,setSearch] = useState('')
    const [sort, setSort] = useState('')

    useEffect(()=>{
      fetch()
    },[loading])


    const fetch =async() =>{
      const response = await axios.get('https://fakestoreapi.com/products')
      console.log(response.data)
      setData(response.data)
      setLoading(false)

    }

    const abc = ()=>{
      setLoading(!loading)
    }

    const filterData = data.filter( (elem) =>(
      elem.title.toLowerCase().includes(search.toLowerCase())
    )
    )

    const filterandSort = ()=>{
      if(sort==='asc'){
        return[...filterData].sort((a,b)=> a.price - b.price)
      }
      else if(sort==='dec'){
        return[...filterData].sort((a,b)=> b.price - a.price)
      }
      return filterData
    }

    
  return ( 
    

    <div className='container-fetch'>
      <input type="text" 
      placeholder='Search the text' 
      value={search} 
      onChange={(e)=>setSearch(e.target.value)}
      style={{padding:'10px', margin:'10px'}} 
      />
      <button onClick={()=> setSort('asc')}>Low to High</button>
      <button  onClick={()=> setSort('dec')}>High to low</button>

      <br /><br />

      {loading ?(<h1 style={{color:`red`}}>Loading....</h1>):(
        
        <div >
          <button onClick={abc}>Click ME</button>
          <h1 className='title'>Product List</h1>
          
          {filterandSort().map((item,index)=>(
            <div key={index} className='item'>
              <h2>Title :- {item.title}</h2>
{/* 
              <LazyLoadImage
              src={item.image} style={{height:`200px`}}
              effect='blur'
              /> */}

              <h2 style={{fontSize:`14px`}}>Description :- {item.description}</h2>
              <h2>Price :- {item.price}</h2>
              <img src={item.image} alt={item.image} 
              style={{width:'200px'}}
              />
              <h2>Count :- {item.rating.count}</h2>
              <button> View Details</button>
            </div>

          ))}
        </div>
      )}

    </div>
  )
}

export default Apifetch



      
{/* 
      {data.map(item => (
        <div val ={item.id} className='item'>
        
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} style={{ width: '100px' }} /> 
          <p>Price: {item.price} USD</p>
    
          <LazyLoadImage
          // src={item.image}
          effect='blur'
          />

        </div>
      ))} */}