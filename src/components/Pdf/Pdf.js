import React, {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

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
    function onDocumentLoadSuccess({numPages}) {
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
    function fileLoad(){
        setFile("http://localhost:3005/a")
        fetch("http://localhost:3005/a")
            .then(res=>console.log(res))
    }
        return (
            <>
                <label htmlFor="file">
                    Load from file: <input onChange={onFileChange} type="file"/>
                </label>
                <label>
                    INPUT TO HHTPS <input onChange={(e) => {
                    setFile(e.target.value[0]);
                    setTimeout(() => console.log("e.target.value[0]", e.target.value), 0)
                }}/>
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
                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber}/>
                    </Document>
                </div>
            </>
        );
   }