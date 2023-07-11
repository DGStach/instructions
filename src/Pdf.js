import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';


let url =
    "https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK"



export default function Test() {

    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [file, setFile] = useState(null);


    function onFileChange(event) {
        setFile(event.target.files[0]);
        console.log("event.target.files[0]", event.target.files[0])
    }

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    /*When document gets loaded successfully*/
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }
    function fileLoad() {
        /*
                setFile("https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK")
        */
                /*fetch('http://localhost:3005/a')*/
                /*    .then(res=>res.text())
                    .then(data=>{console.log("data", data); setFile(data)})
*/
        fetch('http://localhost:3005/a')
            .then((data)=>{
/*
                var url = window.URL.createObjectURL(data),
*/
                var url = window.URL.createObjectURL(new Blob([data])),
                    anchor = document.createElement("a");
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `FileName.pdf`,
                );
                console.log("link", link)
                link.click();
            })

      /*  var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';*/


    /*    fetch('http://localhost:3005/a', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
        }).then(res => res.text())
            .then(data => {
                console.log("data", data);
                setFile(data)
            })*/
    }
    return (
        <>
            <label htmlFor="file">
                Load from file: <input onChange={onFileChange} type="file" />
            </label>
            <label>
                INPUT TO HHTPS <input onChange={(e)=>{setFile(e.target.value[0]); setTimeout(()=>console.log("e.target.value[0]", e.target.value),0)}}/>
            </label>
            <div className="main">
                <button onClick={fileLoad}>Przycisk</button>
                <div>
                    <div className="pagec">
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </div>
                    <div className="buttonc">
                        <button
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                            className="Pre"

                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}

                        >
                            Next
                        </button>
                    </div>
                </div>
{/*                <div> DOC FROM    ->>>   https:/cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK </div>
                <Document
                    file={"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK"}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
           <div> DOC FROM SETFILE </div>

                */}

                <Document
                                        file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
        </>
    );
}