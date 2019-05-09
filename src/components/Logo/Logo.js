import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='mt0 ma4'>
          <Tilt className="Tilt br2 shadow-2" options={{ max : 55, easing: "cubic-bezier(.03,.98,.52,.99)", }} style={{ height: 150, width: 150 }} >
            <div className='Tilt-inner' style={{paddingTop: '24px'}} > 
              <img src={brain} alt={'logo'}/>
            </div>
          </Tilt>
        </div>
    )
}

export default Logo;