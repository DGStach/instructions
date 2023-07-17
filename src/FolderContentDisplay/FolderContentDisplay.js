import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFolder, faFilePdf} from "@fortawesome/free-regular-svg-icons"
import "./FolderContentDisplay.css"

const FolderContentDisplay = ({folderContent}) =>{
/*    console.log("folderContentA", folderContentA)

const folderContent = [
    {ext: "folder", Name: "RB0508", id: 1},
    {ext: "folder", Name: "RB0509", id: 2},
    {ext: "pdf", Name: "RB0509", id: 2}

]*/
    console.log("folderContent", folderContent)

    const listItems = folderContent.map((item,index)=>{
        let extIcon
        if (item.ext === "folder"){
            extIcon = faFolder
        }
        if (item.ext === "pdf"){
            extIcon = faFilePdf
        }

        return (
            <li key={index}>
                <FontAwesomeIcon icon={extIcon} style={{color: "#35558d",}}/>
                    {item.Name}
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