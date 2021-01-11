import React from 'react';
import Mes from './Mes';
import './Calendario.css';

export default class Calendario extends React.Component {

    state = {
        
    }

    /*constructor(props) {
        super(props);
    }*/

    render() {
        let meses = [];
        for (let i = 0; i < 12; i++){
            meses.push(<Mes key={i} mes={i}/>);
        }
       return <div id="cal" className="anio-container">{meses}</div>;
    }
}
