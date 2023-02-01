import logo from './logo.svg';
import './App.css';
import React from 'react';
import FileUpload from './mods/FileUpload';
//comment test
function App() {
  return (
  <React.Fragment>
  <span className='span3'>
  <span className='span1'>
  </span>
    <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <div className='CENTRAL'>
                    <FileUpload/>
                    </div>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    <span className='span2'>
    </span>
    </span>
  </React.Fragment>
  );
}

export default App;
