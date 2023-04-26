import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/Navbar.css';
import './Components/Footer.css';
import './Components/Header.css';
import'./Components/Blogs/BlogPost.css'
import'./Components/Blogs/Blogs.css'
import './Components/news/news.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
