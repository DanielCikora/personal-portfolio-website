import { useEffect } from "react";
import BrowserIcon from "../../assets/images/DC Logo Icon.ico";
import BrowserIconWhite from "../../assets/images/Daniel Logo White.ico";
import MainLogoWhite from "../../assets/images/Daniel Logo White.png";
import MainLogoDefault from "../../assets/images/logo.png";
export default function DarkMode() {
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const updateFavicon = () => {
      const favicon = document.querySelector(".browser-icon");
      const mainLogo = document.querySelector(".logo-image");
      if (darkModeMediaQuery.matches) {
        favicon.href = BrowserIconWhite;
        mainLogo.src = MainLogoWhite;
      } else {
        favicon.href = BrowserIcon;
        mainLogo.src = MainLogoDefault;
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
