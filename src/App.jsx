import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'


function App() {
 

  return (
   <div  className='w-full h-screen flex flex-col background relative overflow-hidden items-center'>
        <h1 className='bg-black text-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold'>RANDOM GIFS</h1>
        <div className='flex flex-col'>
          <Random/>
          <Tag/>
           
          </div> 
   </div>
  )
}

export default App
