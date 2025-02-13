import { useState } from 'react';
import './App.css';
import { IoRoseOutline } from "react-icons/io5";
import video from "./assets/1.mp4"

function App() {
  const [Count, setCount] = useState(0);
  function heldClick() {
    setCount(Count + 1);
  }
  function reset(){
    setCount(0);
  }

  return (
    <div className="container">
      <p className='header'><IoRoseOutline />Happy Valentine Day<IoRoseOutline /></p>
      <div className='Video'>
        <video src={video} type="video/mp4" className='Video1' controls loop>เบราว์เซอร์ของคุณไม่รองรับการแสดงวิดีโอ</video>
      </div>
      <p className='JubCount'>{Count} จุ้บ</p>
      <div className='button'>
        <button className='Jubbutton' onClick={heldClick}>คลิกเพื่อจุ้บ</button>
        <button className='ResetJubbutton' onClick={reset}>คลิกเพื่อรีเซ็ต</button>
      </div>
    </div>
  )
}

export default App;
