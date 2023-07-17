
function Scanner({scanResult}) {
    return (
        <div>
            <h1>QR Code Scanning in React</h1>
            {scanResult
                ? <div> Success: {scanResult}</div>
                :<div style={{width:"500px"}} id="reader"></div>
            }
        </div>
    )
}

export default Scanner;