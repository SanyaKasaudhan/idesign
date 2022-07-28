import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const Item = (product) => {
    const [category, setCategory]=useState([])
   

    useEffect(()=>{
       const filterProduct = (()=>{
            product.product.map((cat)=>(
                setCategory(cat.category)
            ))
        })
    },[])
  return (
    <>
    

{
    product.product.map((item)=>(
        <div key={item.id}>
            <Button className='btn-secondary' onClick={() =>{setCategory(category)}}>jh
               </Button>
                HI---------------
            {item.title}{item.description}<img src={item.images[0]} alt="image" />
    </div>
    ))
}

    </>
  )
}

export default Item