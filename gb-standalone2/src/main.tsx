import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index.css'
import MyEditorComponent from './editor';
//import { MyEditorComponent } from './iso'
import { registerCoreBlocks } from '@wordpress/block-library';



registerCoreBlocks();
//@ts-ignore
const settings = window.getdaveSbeSettings || {};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <MyEditorComponent />
  </React.StrictMode>,
)
