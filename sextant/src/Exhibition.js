import CardDisplay from './Card.js';
import {useEffect, useState, useRef} from 'react';



function Exhibition() {
    const [Api4, setApi4] = useState([]);
    const [Api6, setApi6] = useState([]);

    useEffect(()=>{
        fetch('https://api64.ipify.org?format=json')
          .then(response => response.json())
          .then(setApi6);
       }, []);

       useEffect(()=>{
        fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(setApi4);
       }, []);

    return (
        <div className='Exhibition-deck'>
                <CardDisplay name="IPV4" description={Api4.ip} />
                <CardDisplay name="IPV6" description={Api6.ip} />
                
        </div>
    );
}

export default Exhibition;



