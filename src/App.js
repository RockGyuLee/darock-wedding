
import { useState, useEffect } from 'react';
import './App.css';
import { Main } from './Main';
import { useMediaQuery } from 'react-responsive';
import Snowfall from 'react-snowfall';

import loveBlossomeImg from "./img/petal.png";


// mobile
import { Mobile } from './mobile/mobile';


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
  const [scaleY, setScaleY ] = useState(scaleY_1);
  const [ userScrollY, setUserScrollY ] = useState(null)

  useEffect(()=> {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);

  const scrollProgress = () => {
    
    const scrollTop = document.documentElement.scrollTop;
    setUserScrollY(scrollTop);

    if( scrollTop < scaleX_1) {
      setScaleY(scaleY_1);
    }
    else if( scrollTop >= scaleX_2 ){
      setScaleY(scaleY_2);
    }
    else {
      let y = ( a * scrollTop )+b;
      setScaleY(y);
    }
  }

  const isPc = useMediaQuery({
    query : "(min-width:1024px)"
  });

  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });

  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  return (
    <div className='w-full h-full'>
     <Snowfall 
       // Controls the number of snowflakes that are created (default 150)
       snowflakeCount={45}
       speed={[0.5, 0.8]}
       // Pass in the images to be used
       images={[loveBlossome]}
       radius={[8, 10]}
       style={{
        zIndex: '10',
        position: 'fixed',
        // width: '100vw',
        // height: '100vh',
      }}
      />
      <Main scaleY={scaleY}  scrollY={userScrollY}/>
      {/* {isPc && <Main scaleY={scaleY}  scrollY={userScrollY}/>}
      {isTablet && <p>HI Tablet</p>}
      {isMobile && <Mobile scrollY={userScrollY}/>} */}
      
      {/* <Main scaleY={scaleY}  scrollY={userScrollY}/> */}
      {/* <Main scaleY={scaleY}  scrollY={userScrollY}/> */}
    </div>
  );
}

export default App;
