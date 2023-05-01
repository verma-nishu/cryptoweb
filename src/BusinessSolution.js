import React from 'react'
import CPD from './Assets/images/CPD.svg';
import pink_unicorn from './Assets/images/pink_unicorn.png';
import Rectangleland from './Assets/images/Rectangleland.png';
import rabbit from './Assets/images/rabbit.png';
import blue_unicorn from './Assets/images/blue_unicorn.svg';
import red_symbol from './Assets/images/red_symbol.svg';
import { Button } from 'react-bootstrap';
import HARD_YAKA from './Assets/images/HARD_YAKA.png';
import DAOAMaker_Logo_blue from './Assets/images/DAOMaker_Logo_blue.png';
const BusinessSolution = () => {
  return (
    <>
    <div className='custom-container buy-cpd'>
        <div className='row'>
            <div className='col-lg-6'>
                <h1>$CPD : BRIDGING ONLINE<br/> BUSINESS AND DEFI</h1>
                <h3>$CPD is a utility token of the leading<br/> crypto payment ecosystem with over<br/> €23B volumes.</h3>
                <Button className='cpd-button'>Buy CPD</Button>
            </div>
            <div className='col-lg-6 cpd-images'>
            <img src={pink_unicorn} className='pink-unicorn'/>
            <img src={Rectangleland} className='Rectangleland'/>
            <img src={rabbit} className='rabbit-img'/>
            <img src={red_symbol} className='red-symbol'/>
                <img src={CPD} className='cpd'/>
              <img src={blue_unicorn} className='blue-unicorn'/>
            
              
            </div>
            <div><h3>Strategy Partners:</h3>
            <span><img src={HARD_YAKA }/></span>
            <span><img src={DAOAMaker_Logo_blue }/></span>
            <span><img src={HARD_YAKA }/></span>
            <span><img src={HARD_YAKA }/></span>
            <span><img src={HARD_YAKA }/></span>
            <span><img src={HARD_YAKA }/></span>
            <span><img src={HARD_YAKA }/></span>
            
            </div>
        </div>
        </div></>
  )
}

export default BusinessSolution;