import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import store from './Redux/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  

<Provider store={store}>
<BrowserRouter>
<ToastContainer/>
<React.StrictMode>
  <App />
</React.StrictMode>
</BrowserRouter>
</Provider>,
  
  
)
