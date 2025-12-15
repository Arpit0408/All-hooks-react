import React ,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext' 
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
        <header style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '10px'
    }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </header>
    </div>
  )
}

export default Header
