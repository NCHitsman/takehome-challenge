import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class DBMock {

  async putItem(key, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.setItem(key, data);
        resolve('success')
      }, 100)
    })
  }

  async getItem(key) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = localStorage.getItem(key);
        resolve(item);
      })
    })
  }

}

ReactDOM.render(
  <React.StrictMode>
    <App db={new DBMock()} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
