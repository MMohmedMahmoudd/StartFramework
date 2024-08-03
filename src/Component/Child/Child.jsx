import React from 'react'

export default function Child(props) {
    let {id,category,code,price,count,onSale}=props.product
    
  return (
    <>
    <div className='w-1/4 p-3 '>
      <div className='bg-slate-300 relative shadow-lg rounded-lg p-4 text-slate-800'>
        <h4> Name : {code}</h4>
        <h4> category : {category}</h4>
        <h4> price : {price}</h4>
        <h4> Count : {count}</h4>
        {onSale == true ? (<div className='absolute p-3 bg-red-600 top-0 right-1'>sale</div>) : null}
        <button onClick={()=>props.delete(id)}  className='bg-red-600 text-white w-full'>Delete</button>
        <button onClick={()=>props.update(props.index)}  className='bg-yellow-600 mt-3 text-white w-full'>update</button>
      </div>
    </div>
    
    </>
  )
}
