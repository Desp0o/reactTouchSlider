
import { useEffect, useState, useRef } from "react";

function App() {
  const wrapperRef = useRef()

  let [pressed, setPressed] = useState(false)
  let [startX, setStartX] = useState(0)

  function mouseDownHandler(e){
    setPressed(true)
    setStartX(e.clientX)
  }

  function mouseLeaveHandler(e){
    setPressed(false)
  }

  function mouseMoveHandler(e){
    if(!pressed){
      return
    }

    wrapperRef.current.scrollLeft += startX - e.clientX
  }

  window.onmouseup= () =>{
    setPressed(false)
  }

  return (
    <div className="App">
      <div className="wrapper" 
      ref={wrapperRef} 
      onMouseDown={mouseDownHandler} 
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      >
          <div className="slider">1</div>
          <div className="slider">2</div>
          <div className="slider">3</div>
          <div className="slider">4</div>
          <div className="slider">5</div>
          <div className="slider">6</div>
          <div className="slider">7</div>
          <div className="slider">8</div>
          <div className="slider">9</div>
          <div className="slider">10</div>
          <div className="slider">11</div>
          <div className="slider">12</div>
          <div className="slider">13</div>
          <div className="slider">14</div>
          <div className="slider">15</div>
          <div className="slider">16</div>
      </div>
    </div>
  );
}

export default App;
