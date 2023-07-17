import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFolder, faFilePdf} from "@fortawesome/free-regular-svg-icons"
import "./FolderContentDisplay.css"

const FolderContentDisplay = () =>{
const folderContent = [
    {ext: "folder", product: "RB0508", id: 1},
    {ext: "folder", product: "RB0509", id: 2},
    {ext: "pdf", product: "RB0509", id: 2}

]
    const listItems = folderContent.map((item)=>{
        let extIcon
        if (item.ext === "folder"){
            console.log("item.ext = folder", item.ext)
            extIcon = faFolder
        }
        if (item.ext === "pdf"){
            extIcon = faFilePdf
            console.log("item.ext = pdf", item.ext)

        }

        return (
            <li>
                <FontAwesomeIcon icon={extIcon} style={{color: "#35558d",}}/>
                    {item.product}
            </li>
            )
    })

    return (
        <div>
            <ol className="bulletList">{listItems}</ol>
        </div>
    )
}
export default FolderContentDisplay;