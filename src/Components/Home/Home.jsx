import React from 'react'
import "./Home.css"

import {  Button  } from '@material-ui/core';

localStorage.setItem('@timer', 0);


export default function  Home() {
     return(
     <div className="Home">
          <div className="Titulo">
               
               
               <h1 className="texto_titulo"> Quiz Sobre Iago: </h1>
          </div>

          <Button variant="contained" color="primary" href="Questions">Start </Button>
          

     </div>

     )
};

