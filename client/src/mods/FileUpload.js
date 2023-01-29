import React, { useState } from "react"
import axios from 'axios'
import download from 'downloadjs'
let FileUpload=()=>{
    let[userFile,setUserFile]=useState()
    let[img, setImg]=useState()
    var[fName,setFName]=useState()
    let ChangeHandler=(event)=>{
        setUserFile(URL.createObjectURL(event.target.files[0]))
        setImg(event.target.files[0])
        console.log(event.target.files[0])
        let len=event.target.files[0].name.length-4
        setFName(event.target.files[0].name.slice(0, len) + "jpeg") ;
    }

    let DownloadHandler = async () => {
        await console.log('bam')
        const res = await fetch("http://localhost:8000/download");
        const blob = await res.blob();
        await console.log(blob)
        await download(blob,fName);
      }
    let SubmitHandler= async (event)=>{
        event.preventDefault()
        let data = await new FormData();
        await data.append('file', img)
        await console.log("wassup")
        await axios.post("http://localhost:8000/upload", data, {})
        .then(res => { 
        console.log(res.statusText)
        })
        
        await DownloadHandler()
        console.log(fName)
    }

    return(
        <React.Fragment>
            <form onSubmit={SubmitHandler}>
                <input type="file" name ='file' accept='.jpeg' onChange={ChangeHandler}/>
                <input type="submit"/>
            </form>
            <img src={userFile}/>
        </React.Fragment>
    )
}
export default FileUpload