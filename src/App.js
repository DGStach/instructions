import React, {useEffect, useState} from 'react';
import {Html5QrcodeScanner} from "html5-qrcode"
import Pdf from"../src/components/Pdf/Pdf"
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Scanner from "./components/Scanner/Scanner";
import FolderContentDisplay from "./FolderContentDisplay/FolderContentDisplay";

function App() {
/*
    const[enterFile, setEnterFile] = useState("")
*/
    const [scanResult, setScanResult] = useState(null)
    const [folderContent, setFolderContent] = useState([{ext: "folder", Name: "RB0508", path: "/Users/dagmara/dagmara.gabriela.stach@gmail.com - Google Drive/Mój dysk/docProdukcja/stanowiskoMontazu1/RB0508"}])

    useEffect(() => {
        let scanner;
        scanner = new Html5QrcodeScanner(
            "reader",
            {
                qrbox: {
                    width: 350,
                    height: 350
                },
                fps: 10
            },
            false);
        scanner.render(success, error);

        function success(result) {
            scanner.clear();
            setScanResult(result)
        }

        function error(err) {
            /*
                        console.warn(err);
            */
        }
    },[]);

    function enterPath(){
        let enterFile = "RB0508"
       /* let enterFile = ""*/
        fetch(`http://localhost:3005/enterFolder?entfn=${enterFile}`)
            .then(res => res.json())
            .then(data => setFolderContent(data))

    }

    return (
        <div className="App">
            <button style={{width: "200px", height: "50px"}} onClick={enterPath}> FOLDER CONTENT DISPLAY</button>
            <Scanner scanResult = {scanResult} />
            <FolderContentDisplay folderContent={folderContent}/>
            <Pdf/>
        </div>
    );
}
export default App;
