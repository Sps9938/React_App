import { useEffect,useState } from 'react'

import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './components/ThemBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme using the hook -> useEffect]

useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])
  
  return (
    
    <ThemeProvider value= {{themeMode, lightTheme, darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* themeBtb */}
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
              {/* card */}
              <Card />
          </div>
      </div>
  </div>
    </ThemeProvider>

  )
}

export default App
