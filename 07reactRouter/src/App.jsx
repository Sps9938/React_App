import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './components/Context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card/Card'


function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightMode = () => {
    setThemeMode("light")
  }
  const darkMode = () => {
    setThemeMode("dark")
  }

  //actual change in theme using the hook -> userEffect()
  useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (
 
   <ThemeProvider value={{themeMode, lightMode, darkMode}}>
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
