import './App.css'; // Main styles for Navbar and Hero
// import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import Contact from './Components/Contact';

import React, { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  // Function to show alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    // Remove the alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Function to toggle light/dark mode
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Home - Light Mode';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Home - Dark Mode';
    }
  };

  return (
    <>
   
      {/* Pass mode and toggleMode as props */}
      {/* <Navbar mode={mode} toggleMode={toggleMode} /> */}

      {/* Pass alert to the Alert component */}
      <Alert alert={alert} />

      {/* Pass mode for consistent styling */}
      <TextForm mode={mode} />
      <Contact/>
    </>
  );
}



export default App;

// import React from 'react';
// import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';
// import { BrowserRouter as Router } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-black text-white">
//         <Navbar />
//         <MainContent />
//       </div>
//     </Router>
//   );
// }

// export default App;
