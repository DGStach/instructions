import React from 'react';
import Pdf from"./Pdf"
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import Scanner from "./components/Scanner/Scanner";

function App() {
    let enterFile = "stanowiskoMontażu2"

    function enterPath(){

        fetch(`http://localhost:3005/enterFolder?entfn=${enterFile}`)
            .then(console.log)
    }

    return (
        <div className="App">
            <button style={{width: "200px", height: "50px"}} onClick={enterPath}></button>
            <Scanner/>
            <Pdf/>
        </div>
    );
}
export default App;
