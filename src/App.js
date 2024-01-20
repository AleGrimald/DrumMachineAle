import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [texto, setTexto]=useState("");

  useEffect(()=>{
    document.addEventListener('keydown', (event)=>{playSonido(event.key.toUpperCase());});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const drumpsArr = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      nota:'Heater 1'
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      nota:'Heater 2'
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      nota:'Heater 3'
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      nota:'Heater 4'
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      nota:'Clap'
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      nota:'Open HH'
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      nota:'Kick n\' Hat'
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      nota:'Kick'
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      nota:'Closed HH'
    }
  ];


  const playSonido = (selector)=>{
    const audio = document.getElementById(selector);
    switch (selector) {
      case 'Q':
        audio.play();
        setTexto(drumpsArr[0].nota);
        break;
      case 'W':
        setTexto(drumpsArr[1].nota);
        audio.play();
        break;
      case 'E':
        setTexto(drumpsArr[2].nota);
        audio.play();
        break;
      case 'A':
        setTexto(drumpsArr[3].nota);
        audio.play();
        break;
      case 'S':
        setTexto(drumpsArr[4].nota);
        audio.play();
        break;
      case 'D':
        setTexto(drumpsArr[5].nota);
        audio.play();
        break;
      case 'Z':
        setTexto(drumpsArr[6].nota);
        audio.play();
        break;
      case 'X':
        setTexto(drumpsArr[7].nota);
        audio.play();
        break;
      case 'C':
        setTexto(drumpsArr[8].nota);
        audio.play();
        break;
    
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          {texto}
        </div>

        <div className='drum-pads'>
          {drumpsArr.map(boton =>
            <button key={boton.keyCode} onClick={()=>{playSonido(boton.text, boton.nota)}} className='drum-pad' id={boton.src}>
              {boton.text}
              <audio className='clip' id={boton.text} src={boton.src}></audio>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;