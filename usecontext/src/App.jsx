import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header.jsx';


function App() {

  return (
    <>
<ThemeProvider>
<Header />
</ThemeProvider>
    </>
  )
}

export default App
