import React, { useState } from 'react'
import Child from '../Child/Child.jsx'

export default function Parent() {
    const [Products, setProducts] = useState([
      {id:1,code:'samsung',price:5000,count:5,onSale:true ,category: "Mopile"},
      {id:2,code:'toshiba',price:3000,count:5,onSale:false ,category: "Mopile"},
      {id:3,code:'Lenovo',price:3000,count:5,onSale:true ,category: "Mopile"},
      {id:4,code:'lg',price:4000,count:5,onSale:false ,category: "Mopile"},
      {id:5,code:'nokia',price:5000,count:5,onSale:false ,category: "Mopile"},
      {id:6,code:'iphone',price:50000,count:5,onSale:true ,category: "Mopile"},
      {id:7,code:'Redmi',price:5000,count:5,onSale:true ,category: "Mopile"}
  ])
  function deleteProduct(productId){
    let myProduct = structuredClone(Products)
    let newProduct = myProduct.filter((product) => product.id!==productId)
    setProducts(newProduct)
  }
  function updateProduct (index){
    let myProduct = structuredClone(Products)
        myProduct[index].count += 1
        setProducts(myProduct)
  }

  return (
    <>
    <h2 className='my-4 text-white text-5xl'>Parent </h2>
    <div className="container mt-4 mx-auto">
      <div className="row ">
      {Products.map((Product,i) =>( <Child 
      key={Product.id}
      index={i} 
      update={updateProduct} 
      product={Product} 
      delete={deleteProduct}
      /> ))}
      </div>
    </div>
    </>
  )
}
