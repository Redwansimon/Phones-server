import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);
  return (
    <div>
      <h3>phone details here : </h3>
      <h2>Name : {phone.name}</h2>
      <img src={phone.image} alt="" />
    </div>
  )
}

export default Phone
