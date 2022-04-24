import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(

  // <BrowserRouter>
  // <Navbar/>
  //    <Routes>
  //      <Route path="exernotion/" element={<AddActivity/>} />
  //      <Route path="exernotion/activity-history" element={<ActivityHistory/>}/>
  //    </Routes>
  //    <Footer/>
  // </BrowserRouter>
  <h1>helloworld</h1>
,
document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
