// import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react';

function App() {
  const [color, setColor] = useState("color")
  return (
    <>
      <div className='w-full h-screen duration-200'
       style={{backgroundColor: color}} 
       >
        <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button 
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "red"}}>Red</button>
            <button 
            onClick={() => setColor("lavender")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "lavender"}}>lavender</button>
            <button onClick={() => setColor("maroon")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "maroon"}}>maroon</button>
            <button onClick={() => setColor("magneta")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "magenta"}}>magenta</button>
            <button onClick={() => setColor("pink")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "pink"}}>pink</button>
            <button onClick={() => setColor("orange")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "orange"}}>orange</button>
            <button 
            onClick={() => setColor("purple")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "purple"}}>purple</button>
            <button onClick={() => setColor("silver")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "silver"}}>silver</button>
            <button onClick={() => setColor("brown")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "brown"}}>brown</button>
            <button onClick={() => setColor("grey")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "grey"}}>grey</button>
            <button onClick={() => setColor("black")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "black"}}>black</button>
            <button onClick={() => setColor("yellow")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "yellow"}}>yellow</button>
            <button onClick={() => setColor("blue")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "blue"}}>blue</button>
            <button onClick={() => setColor("green")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColor("charcoal")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "charcoal"}}>charcoal</button>
          </div>
        </div>
      </div> 

    </>
  );
}

export default App;
