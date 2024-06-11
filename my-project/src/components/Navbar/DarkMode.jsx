// eslint-disable-next-line no-unused-vars
import React from "react"
import LightButton from "../../assets/website/light.png"
import DarkButton from "../../assets/website/moon.png"

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  )

  const element = document.documentElement

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      element.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme])

  return (
    <div className="relative">
      <img
        src={LightButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] transition-all duration-300 absolute ${
          theme === "dark" ? "opacity-0" : "opacity-100 z-10 right-0"
        }`}
      />
      <img
        src={DarkButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] transition-all duration-300"
      />
    </div>
  )
}

export default DarkMode
