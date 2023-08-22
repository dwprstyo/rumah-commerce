import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { AppLayout } from './layout/AppLayout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
)
