import { useEffect } from "react";
import BrowserIcon from "../../assets/images/DC Logo Icon.ico";
import BrowserIconWhite from "../../assets/images/Daniel Logo White.ico";
export default function DarkMode() {
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const updateFavicon = () => {
      const favicon = document.querySelector(".browser-icon");
      if (darkModeMediaQuery.matches) {
        favicon.href = BrowserIconWhite;
      } else {
        favicon.href = BrowserIcon;
      }
    };
    updateFavicon();
    darkModeMediaQuery.addEventListener("change", updateFavicon);
    return () => {
      darkModeMediaQuery.removeEventListener("change", updateFavicon);
    };
  }, []);
  return null;
}
