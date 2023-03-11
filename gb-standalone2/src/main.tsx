import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index.css'
import { MyEditorComponent } from './iso'
import { registerCoreBlocks } from '@wordpress/block-library';

import './styles.scss';

registerCoreBlocks();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <MyEditorComponent />
  </React.StrictMode>,
)
