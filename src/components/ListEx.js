
import React from 'react'

export default function ListEx() {
    const cars= [{name:"lambo",id:1},{name:"bmw",id:2},{name:"audi",id:3},{name:"rr",id:4}];
    //cars.add("Guru");
      const listcars=cars.map((i)=><li key={i.id}>{i.name}</li>);
      
  return (
    <>{listcars}</>
  )
}
