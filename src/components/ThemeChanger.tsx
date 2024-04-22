import { useTheme } from "next-themes"
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ThemeChanger() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)


    useEffect(() => {
        setMounted(true)
    }, [])

    return <div className="ml-4 mt-1 text-xl hover:text-sky-500 ">
        <button onClick={() => setTheme(theme == "dark" ? 'light' : "dark")}>{theme == 'dark' ? <FaMoon /> : <IoIosSunny />}</button>
    </div>
}