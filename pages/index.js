import { useContext, useState } from "react";

import Page from "../components/Page";
import Header from "../components/Header";

import PageContext from "../context/page";
import Navbar from "../components/Navbar";

export default function Home() {
  const [timer, setTimer] = useState(false)
  const { actualPage, nextPage, previousPage } = useContext(PageContext);
  console.log(actualPage)

  const handleWheel = (e) => {
    const DOWN = 100;

    if (!timer) {
      setTimer(true);

      if (e.deltaY === DOWN) {
        nextPage();
      } else {
        previousPage();
      }

      setTimeout(() => {
        setTimer(false);
      }, 700)
    }
  }

  return (
    <div className="h-full relative overflow-hidden" onWheel={handleWheel}>
      <Header />

      <Page index={0} color="bg-purple-600" />
      <Page index={1} color="bg-red-600" />
      <Page index={2} color="bg-blue-600" />
      <Page index={3} color="bg-yellow-600" />
      <Page index={4} color="bg-green-600" />

      <Navbar />
    </div>
  )
}
