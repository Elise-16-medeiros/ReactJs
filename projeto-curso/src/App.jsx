import React from 'react';
import Card from './Components/Card/Card';
import Contador from './Components/Contador/Contador';
import MegaSena from './Components/MegaSena/MegaSena';

export default function App(props) {
    return (
        <>
            <h1>Fundamentos React</h1>
            <Card titulo="Mega Sena Sorteio">
                <MegaSena qtde={8} />
            </Card>
            <br />
            <Card titulo="Contador">
                <Contador numInicial={10} />
            </Card>
           


        </>
    );
}