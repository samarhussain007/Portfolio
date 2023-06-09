import { useEffect, useState } from "react";
import Home from "./scenes/home";
import Navbar from "./scenes/navbar";
import AboutMe from "./scenes/aboutMe";
import useMediaQuery from "./hooks/useMediaQuery";
import { SelectedPage } from "./shared/types";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const isAboveMediumScreen: boolean = useMediaQuery("(min-width:700px)");
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.AboutMe
  );
  const flexBetween = "flex justify-between items-center";
  console.log(selectedPage);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar
        selectedPage={selectedPage}
        isTopOfPage={isTopOfPage}
        isAboveMediumScreen={isAboveMediumScreen}
        flexBetween={flexBetween}
      />
      <Home setSelectedPage={setSelectedPage} flexBetween={flexBetween} />
      <AboutMe setSelectedPage={setSelectedPage} flexBetween={flexBetween} />
    </>
  );
}

export default App;
