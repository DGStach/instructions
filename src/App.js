import React from 'react';
import Pdf from"./Pdf"
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Scanner from "./Scanner";

function App() {
    return (
        <div className="App">
            <Scanner/>
            <Pdf/>
        </div>
    );
}
export default App;
