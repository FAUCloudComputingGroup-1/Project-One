import React, { useState } from "react"
import axios from 'axios'
let FileUpload=()=>{
    let[userFile,setUserFile]=useState()
    let[img, setImg]=useState()
    
    let ChangeHandler=(event)=>{
        // console.log(event.target.files[0])
        setUserFile(URL.createObjectURL(event.target.files[0]))
        setImg(event.target.files[0])
    }

    let SubmitHandler=(event)=>{
        event.preventDefault()
        let data = new FormData();
        data.append('file', data)
        axios.post("http://localhost:5000/upload", data)
        .then(res => { 
        console.log(res.statusText)
      })
    }

    
    

    return(
        <React.Fragment>
            <form onSubmit={SubmitHandler}>
                <input type="file" accept='.jpeg' onChange={ChangeHandler}/>
                <input type="submit"/>
            </form>
            <img src={userFile}/>
        </React.Fragment>
        
    )
}
export default FileUpload