import {Html5QrcodeScanner} from "html5-qrcode"
import {useEffect, useState} from "react";


function Scanner() {

    const [scanResult, setScanResult] = useState(null)

    useEffect(() => {
        let scanner;
        scanner = new Html5QrcodeScanner(
            "reader",
            {
                qrbox: {
                    width: 250,
                    height: 250
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
            console.warn(err);
        }
    },[]);

    return (
        <div>
            <h1>QR Code Scanning in React</h1>
            {scanResult
                ? <div> Success: {scanResult}</div>
                :<div id="reader"></div>
            }
        </div>
    )
}

export default Scanner;