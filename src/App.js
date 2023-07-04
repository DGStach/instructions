import React from 'react';
import Pdf from"./Pdf"
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


function App() {
    return (
        <div className="App">
           <Pdf/>
        </div>
    );
}
export default App;
