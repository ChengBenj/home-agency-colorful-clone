import { useContext } from "react";
import PageContext from "../context/page";

export default function Home() {
  const { actualPage, nextPage, previousPage } = useContext(PageContext);

  const defaultClass = " h-full w-full absolute inset-0 transition-all duration-700 ease-in-out transform translate-y-0 ";
  const hideClass = "translate-y-full delay-700";

  const handleWheel = (e) => {
    const DOWN = 100;

    if (e.deltaY === DOWN) {
      nextPage();
    } else {
      previousPage();
    }
  }

  return (
    <div className="h-full relative overflow-hidden" onWheel={handleWheel}>
      <div className={"bg-purple-600" + defaultClass + (actualPage !== 0 ? hideClass : '')} />
      <div className={"bg-red-600" + defaultClass + (actualPage !== 1 ? hideClass : '')} />
      <div className={"bg-blue-600" + defaultClass + (actualPage !== 2 ? hideClass : '')} />
      <div className={"bg-yellow-600" + defaultClass + (actualPage !== 3 ? hideClass : '')} />
      <div className={"bg-green-600" + defaultClass + (actualPage !== 4 ? hideClass : '')} />
    </div>
  )
}
