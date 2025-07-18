import React, { useEffect, useState } from 'react'
import axios from 'axios';



const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY }`;

const useGif = () => {
 const [gif, setGif]=useState('');
 const [loading, setLoading]=useState('false');
 
 async function fetchData(tag) {
    setLoading(true);

    const {data} =await axios.get(tag ? `{url}&tag=${tag}` : url);
    const imageSource=data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
 }

   useEffect(()=>{
       fetchData();
   },[])

   return{gif,loading,fetchData}
}

export default useGif;



