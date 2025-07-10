import React, { useState } from 'react'
import useGif from '../hooks/useGif';
import Spinner from '../components/Spinner';

const Tag = () => {

  const [tag,setTag]=useState('');

  const {gif,loading,fetchData}=useGif(tag);

  return (
     <div className='w-[600px] bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
       <h1 className='text-2xl underline uppercase font-bold'>A Random {tag} GIF</h1>
      {
        loading? (<Spinner/>): ( <img src={gif} width={450} />)
      }

      <input
         className='w-10/12 text-lg py-2 bg-white text-black rounded-lg mb-[3px] text-center'
         onChange={(event)=> setTag(event.target.value)}
         value={tag}
      />
       <button 
       className='w-10/12 bg-pink-500 text-lg py-2 rounded-lg mb-3'
       onClick={() => {
         fetchData(tag);
       }}>Generate</button>
    </div>
  )
}

export default Tag
