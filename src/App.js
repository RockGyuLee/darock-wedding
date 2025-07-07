
import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Main } from './Main';
import { useMediaQuery } from 'react-responsive';
import Snowfall from 'react-snowfall';

import loveBlossomeImg from "./img/petal.png";

import BgmJoy from "./mp3/joy-JeTaime.mp3";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePause, faCirclePlay } from '@fortawesome/free-solid-svg-icons';


const scaleX_1 = 100;
const scaleY_1 = 1;
const scaleY_2 = 0.65;
const scaleX_2 = scaleX_1 + 800;

// y=ax+b a는 기울기.
// b = y -ax;
const a = ((scaleY_2 - scaleY_1) / (scaleX_2 - scaleX_1 ));
const b = scaleY_2 - (a * scaleX_2 );

const loveBlossome = document.createElement('img');
loveBlossome.src = loveBlossomeImg;

function App() {
  
  const audioRef = useRef(null);
  const [hasPlayed, setHasPlayed]  = useState(false);


  const handleEnable = () => {
    if (!hasPlayed &&audioRef.current) {
      audioRef.current.play().then(() => {
        setHasPlayed(true);
        console.log("오디오 재생 시작됨");
      }).catch(err => {
        console.warn("재생 실패:", err);
      });
    }
  };

  const handleDisenable = () => {
    if (hasPlayed &&audioRef.current) {
      audioRef.current.pause();
      setHasPlayed(false);
    }
  };
  return (
    <div className='w-full h-full '>
      <div className='fixed flex items-center z-50 top-4 pl-4 text-gray-500 text-2xl'>
        {!hasPlayed && ( <FontAwesomeIcon className='' icon={faCirclePlay} onClick={handleEnable}/>)}
        {hasPlayed && (<FontAwesomeIcon icon={faCirclePause} onClick={handleDisenable}/>)}
        <audio ref={audioRef}  loop >
          <source src={BgmJoy} type='audio/mp3' />
        </audio>
        <div className='ml-2 fade-message bg-gray-500 text-sm p-2 text-white rounded'> 클릭하시면 배경음악과 같이 즐기실 수 있습니다!</div>
      </div>
      
     <Snowfall 
       snowflakeCount={45}
       speed={[0.5, 0.8]}
       images={[loveBlossome]}
       radius={[8, 10]}
       style={{
          zIndex: '10',
          position: 'fixed',
        }}
      />
      <Main />
    
    </div>
  );
}

export default App;
