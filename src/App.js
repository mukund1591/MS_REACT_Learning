import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); // 'light' or 'dark'
  const [alert, setAlert] = useState(null);



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Utils - Dark Mode";
      // setInterval=(() => {
      //   document.title = "Hello Text Utils";
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Utils - Light Mode";
    }
  };





  return (
    <>
      {/* <Router> */}
        <Navbar title="Text Utils" aboutUs="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/about" element={ */}
              {/* <About/>}/> */}
            {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyse here:" mode={mode} />}/> */}
            <TextForm showAlert={showAlert} heading="Enter the Text to analyse here:" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
