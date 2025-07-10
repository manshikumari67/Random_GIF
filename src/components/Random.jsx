import React from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner'

const Random = () => {

    const{gif,loading,fetchData}=useGif();

  return (
    <div className='w-[600px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
       <h1 className='text-2xl underline uppercase font-bold'>A Random GIF</h1>
      {
        loading? (<Spinner/>): ( <img src={gif} width={450} />)
      }
       <button 
       className='w-10/12 bg-pink-500 text-lg py-2 rounded-lg mb-3'
       onClick={() => {
         fetchData();
       }}>Generate</button>
    </div>
  )
}

export default Random
