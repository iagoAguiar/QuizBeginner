import React from 'react'



const Timer = () => {
     let  controle = 0;
     if(localStorage.getItem('@timer') > 0 ){
          controle = parseInt(localStorage.getItem('@timer'));
     } else{          
          controle = 0;
     }
     const [counter, setCounter] = React.useState(controle);
     
     

     localStorage.setItem('@timer', counter);

     React.useEffect(() => {
          const timer = setInterval(() => setCounter(counter + 1), 1000);
          return () => clearInterval(timer);
        }, [counter]);


      localStorage.setItem('@timer', counter);

     return(
     <div>
          <div>Countdown: {counter}</div>
     </div>
     )
}



export default Timer;

