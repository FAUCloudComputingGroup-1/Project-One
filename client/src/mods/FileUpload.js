import React, { useState, useRef } from "react"
import axios from 'axios'
import download from 'downloadjs'
import './FileUpload.css'
let FileUpload=()=>{
    let[userFile,setUserFile]=useState()
    let[img, setImg]=useState()
    var[fName,setFName]=useState()
    var count = useRef(0);

    
    let ChangeHandler=(event)=>{
        setUserFile(URL.createObjectURL(event.target.files[0]))
        setImg(event.target.files[0])
        console.log(event.target.files[0])
        let len=event.target.files[0].name.length-4
        setFName(event.target.files[0].name.slice(0, len) + "jpeg");
        count.current=1
    }

    let DownloadHandler = async () => {
        await console.log('bam')
        const res = await fetch("http://100.26.106.118:8080/download");
        const blob = await res.blob();
        await console.log(blob)
        await download(blob,fName);
      }

    let SubmitHandler= async (event)=>{
        event.preventDefault()
        let data = await new FormData();
        await data.append('file', img)
        await console.log("wassup")
        await axios.post("http://100.26.106.118:8080/upload", data, {})
        .then(res => { 
        console.log(res.statusText)
        })
        
        await DownloadHandler()
        console.log(fName)
    }
console.log(count.current)
if(count.current===0){
    return(
        <React.Fragment>
            <form onSubmit={SubmitHandler}>
                <input className= 'pre_button1'type="file" title=" " name ='file' accept='.jpeg' onChange={ChangeHandler}/>
            </form>
        </React.Fragment>
    )
}
else {
  return(
      <React.Fragment>
          <form className='postform' onSubmit={SubmitHandler}>
              <input className='button1' type="file" title=" " name ='file' accept='.jpeg' onChange={ChangeHandler}/>
              <input className='button2' type="submit"/>
          </form>
          
<div className="container">
<div className="image">
  <img src={userFile} className="img" alt=""/>
</div>
</div>
      </React.Fragment>
  )
}
}
export default FileUpload
