import React, {useState} from 'react';
import './Surprise.css';
import opened  from './../opened.png';
import Anime, {anime} from 'react-anime';
import {  ButtonToolbar , Card} from 'react-bootstrap';
import { duration, Button } from '@material-ui/core';
import Modal from 'react-awesome-modal';
import thanky from './../thanky.png';
import sad from './../sad.png';


export default function Surprise() {
    const [isPop, setPop] = useState(false);
    const [yes, setYes] = useState(false);

    const openModal = (text)=> {
        setPop(true);

        if(text === 'Yes'){
            setYes(true);
        }
    }

    const closeModal = ()=> {
        setPop(false);
        setYes(false);
    }

    const yesText = 'Yes';
    const noText = 'No';

    const showYes = () => {
        return(
            <Modal visible={yes} width="400" height="300" padding-top="2200" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    
                    
                    <div>
                    <p style={{color:"black"}}>
                            Text me with "I would!"
                        </p>
                        <img  src={thanky} className="App-check" />
                        
                        <a href="javascript:void(0);" onClick={() => closeModal()}>Close</a>
                    </div>
                </Modal>
        )
    }

    const showNo = () => {
        return(
            <Modal visible={isPop} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <p style={{color:"black"}}>
                            Owww! I guess you hit the wrong button!
                        </p>
                        <img src={sad} className="App-check" /><br/>
                        <a href="javascript:void(0);" onClick={() => closeModal()}>Close</a>
                    </div>
                </Modal>
        )
    }
    const showCard = () => {
        return (
            <div>
               
                <ButtonToolbar>
        <Button className="Button" onClick={() => openModal(yesText)}> 
         {yesText}
        </Button>
         <Button variant="secondary" onClick={() => openModal(noText)}>
             {noText}</Button>
        </ButtonToolbar>
                </div>
        );
    }
    return (
        <div>
        <header className="App-head">
        <Anime 
        easing="easeOutExpo"
        translateY={[-100,0]}
        duration={1400}
        delay={(el, index) => index * 30}>
    <p className="firstText">
          Sharida Holloway, would you be my valentine ? 
        </p>
  </Anime>
            
        <img src={opened} className="App-check" alt="logo" />
        {showCard()}

        {yes ? showYes() : showNo()}
      </header>
        
      
      {/* <Footer/> */}
      </div>
    );
  }