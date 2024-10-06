import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
 let { id } = useParams();
console.log(id);

const [url,setUrl]=useState('');
const [name,setname]=useState('');
const navigate=useNavigate();

const updateimg = () => {
    axios.put(`https://66e7e69db17821a9d9da6ed1.mockapi.io/Blog/${id}`,{
        image:url,
    })
    .then(()=>{
        navigate('/')
    })
}

const updatename = () => {
    axios.put(`https://66e7e69db17821a9d9da6ed1.mockapi.io/Blog/${id}`,{
        name:name,
    })
    .then(()=>{
        navigate('/')
    })
}



  return (
  <div className='w-full  h-screen bg-[lightblue] flex justify-center items-center'>
    <div className='md:w-[50%] max-sm:w-[90%] md:h-[50%] max-sm:h-full bg-white flex flex-col justify-evenly max-sm:justify-start max-sm:gap-8 md:pl-5  '>
      <h1 className='text-2xl font-bold'>Update Character info: </h1>
      <h3 className='text-2xl font-bold'>image Url:</h3>
      <input type="text" value={url} onChange={(e)=>{setUrl(e.target.value)}} placeholder="Type here image Url" className="input w-[50%] max-sm:w-[100%] border border-black" />
      <button className="btn btn-primary md:w-1/5 md:text-2xl text-lg" onClick={updateimg}>Update image</button>

      <h3 className='text-2xl font-bold'>Name:</h3>
      <input type="text" placeholder="Type here Name" value={name} onChange={(e)=>{setname(e.target.value)}} className="input w-[50%] max-sm:w-[100%] border border-black" />
      <button className="btn btn-primary md:w-1/5 md:text-2xl text-lg" onClick={updatename}>Update name</button>

      
      
    </div>
  </div>
  )
}

export default Update